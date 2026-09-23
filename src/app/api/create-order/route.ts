import { NextRequest, NextResponse } from "next/server";
import { calculateAndValidateOrder } from "@/lib/products";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, customer } = body;

    // Validate customer details
    if (!customer) {
      return NextResponse.json(
        { success: false, error: "Customer information is required" },
        { status: 400 }
      );
    }

    const { name, phone, email, address, city, state, pincode } = customer;

    if (!name?.trim() || !phone?.trim() || !email?.trim() || !address?.trim() || !city?.trim() || !state?.trim() || !pincode?.trim()) {
      return NextResponse.json(
        { success: false, error: "All customer contact and address fields are required" },
        { status: 400 }
      );
    }

    // Validate Indian phone number (10 digits starting with 6, 7, 8, 9)
    const cleanPhone = phone.replace(/\D/g, "");
    const normalizedPhone = cleanPhone.length === 12 && cleanPhone.startsWith("91")
      ? cleanPhone.slice(2)
      : cleanPhone;

    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number" },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate Indian pincode (6 digits)
    const cleanPincode = pincode.replace(/\D/g, "");
    if (!/^\d{6}$/.test(cleanPincode)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 6-digit Indian PIN code" },
        { status: 400 }
      );
    }

    // Calculate & validate items against server catalog (prevents client price manipulation)
    const validation = calculateAndValidateOrder(items);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error || "Invalid cart items" },
        { status: 400 }
      );
    }

    // Server-side Razorpay credentials (supports multiple secret naming conventions)
    const keyId =
      process.env.RAZORPAY_KEY_ID ||
      process.env.RAZORPAY_LIVE_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    const keySecret =
      process.env.RAZORPAY_KEY_SECRET ||
      process.env.RAZORPAY_SECRET_KEY ||
      process.env.RAZORPAY_LIVE_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Missing Razorpay credentials on server");
      return NextResponse.json(
        {
          success: false,
          error: "Razorpay payment gateway credentials are not configured on server. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in environment variables.",
        },
        { status: 500 }
      );
    }

    // Unique application order ID (e.g. ORD-100234)
    const appOrderId = `ORD-${Date.now().toString().slice(-6)}`;

    // Total in paise (INR subtotal * 100)
    const amountInPaise = Math.round(validation.totalAmount * 100);

    // Call Razorpay Orders API
    const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`;
    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt: appOrderId,
        notes: {
          app_order_id: appOrderId,
          customer_name: name.trim(),
          customer_phone: normalizedPhone,
          customer_email: email.trim(),
          products: validation.productSummaryString.slice(0, 200),
        },
      }),
    });

    const razorpayData = await razorpayResponse.json();

    if (!razorpayResponse.ok) {
      console.error("Razorpay order creation failed:", razorpayData);
      return NextResponse.json(
        {
          success: false,
          error: razorpayData.error?.description || "Failed to initiate Razorpay order",
        },
        { status: razorpayResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      keyId, // Returned to client dynamically so no NEXT_PUBLIC_ variable is required in Vercel
      orderId: appOrderId,
      razorpayOrderId: razorpayData.id,
      amount: razorpayData.amount, // in paise
      currency: razorpayData.currency,
      subtotal: validation.subtotal,
      shipping: validation.shipping,
      totalAmount: validation.totalAmount,
      totalQuantity: validation.totalQuantity,
      productDetails: validation.productSummaryString,
    });
  } catch (error: any) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
