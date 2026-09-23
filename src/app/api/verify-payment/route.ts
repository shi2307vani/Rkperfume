import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId,
      customer,
      productDetails,
      totalQuantity,
      subtotal,
      shipping,
      totalAmount,
    } = body;

    // Validate required payment credentials
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing Razorpay payment verification parameters",
        },
        { status: 400 }
      );
    }

    const keySecret =
      process.env.RAZORPAY_KEY_SECRET ||
      process.env.RAZORPAY_SECRET_KEY ||
      process.env.RAZORPAY_LIVE_KEY_SECRET;

    if (!keySecret) {
      console.error("Missing RAZORPAY_KEY_SECRET on server");
      return NextResponse.json(
        {
          success: false,
          error: "Server payment configuration error: Missing RAZORPAY_KEY_SECRET",
        },
        { status: 500 }
      );
    }

    // Server-side HMAC-SHA256 signature verification
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isMatch =
      expectedSignature.length === razorpay_signature.length &&
      crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(razorpay_signature)
      );

    if (!isMatch) {
      console.error("Razorpay signature verification failed for payment:", razorpay_payment_id);
      return NextResponse.json(
        {
          success: false,
          paymentStatus: "FAILED",
          error: "Invalid Razorpay payment signature. Payment verification failed.",
        },
        { status: 400 }
      );
    }

    // Payment is verified!
    const paymentStatus = "PAID";
    const orderStatus = "PLACED";

    // Format Indian Date string (DD/MM/YYYY)
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(now);

    // Prepare verified order record for Google Sheet
    const sheetPayload = {
      orderId: orderId || `ORD-${Date.now().toString().slice(-6)}`,
      orderDate: formattedDate,
      customerName: customer?.name || "",
      phone: customer?.phone || "",
      email: customer?.email || "",
      address: customer?.address || "",
      city: customer?.city || "",
      state: customer?.state || "",
      pincode: customer?.pincode || "",
      productDetails: productDetails || "ESSPRIVE Luxury Perfume",
      quantity: totalQuantity || 1,
      subtotal: subtotal || 0,
      shipping: shipping || 0,
      totalAmount: totalAmount || 0,
      currency: "INR",
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      paymentStatus: paymentStatus,
      orderStatus: orderStatus,
    };

    // Forward to Google Apps Script Web App (supports flexible webhook names)
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.GOOGLE_SHEET_URL;
    let sheetRecorded = false;
    let sheetMessage = "";

    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        const sheetResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetPayload),
          redirect: "follow", // Follow Google Script redirects
        });

        const sheetText = await sheetResponse.text();
        try {
          const sheetJson = JSON.parse(sheetText);
          sheetRecorded = sheetJson.status === "success" || sheetJson.status === "already_exists";
          sheetMessage = sheetJson.message || "";
        } catch {
          sheetRecorded = sheetResponse.ok;
        }
      } catch (sheetErr: any) {
        console.error("Error sending order to Google Sheets:", sheetErr);
        sheetMessage = sheetErr.message || "Failed to reach Google Sheets webhook";
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL not configured. Order verified without Google Sheet sync.");
    }

    return NextResponse.json({
      success: true,
      orderId: sheetPayload.orderId,
      razorpayPaymentId: razorpay_payment_id,
      paymentStatus: paymentStatus,
      orderStatus: orderStatus,
      sheetRecorded,
      sheetMessage,
    });
  } catch (error: any) {
    console.error("Error in verify-payment handler:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Payment verification failed" },
      { status: 500 }
    );
  }
}
