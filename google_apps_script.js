/**
 * ============================================================================
 * RK PERFUME - GOOGLE APPS SCRIPT ORDER PERSISTENCE
 * Sheet Name: Perfume Store Orders
 * ============================================================================
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new spreadsheet.
 * 2. Rename the spreadsheet to: Perfume Store Orders
 * 3. In Row 1, set up these exact 19 column headers:
 *    A1: Order ID
 *    B1: Order Date
 *    C1: Customer Name
 *    D1: Phone
 *    E1: Email
 *    F1: Address
 *    G1: City
 *    H1: State
 *    I1: Pincode
 *    J1: Product Details
 *    K1: Quantity
 *    L1: Subtotal
 *    M1: Shipping
 *    N1: Total Amount
 *    O1: Currency
 *    P1: Razorpay Order ID
 *    Q1: Razorpay Payment ID
 *    R1: Payment Status
 *    S1: Order Status
 * 
 * 4. In Google Sheets, click: Extensions -> Apps Script
 * 5. Replace all code in the script editor with this file's contents.
 * 6. Click "Deploy" (top right) -> "New deployment"
 * 7. Click the gear icon beside "Select type" -> choose "Web app"
 * 8. Configure the deployment settings:
 *    - Description: Perfume Orders Webhook
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 9. Click "Deploy", review permissions, and copy the "Web app URL".
 * 10. Paste this URL into your .env.local as GOOGLE_SHEET_WEBHOOK_URL:
 *     GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 * ============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Wait up to 15 seconds to acquire a lock and prevent concurrent write collisions
    lock.waitLock(15000);

    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "No post data received" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "Invalid JSON payload" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Validate required fields
    if (!data.razorpayPaymentId || !data.orderId) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Missing required order fields: razorpayPaymentId or orderId",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Perfume Store Orders") || ss.getActiveSheet();

    // Ensure header row exists if sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Order ID",
        "Order Date",
        "Customer Name",
        "Phone",
        "Email",
        "Address",
        "City",
        "State",
        "Pincode",
        "Product Details",
        "Quantity",
        "Subtotal",
        "Shipping",
        "Total Amount",
        "Currency",
        "Razorpay Order ID",
        "Razorpay Payment ID",
        "Payment Status",
        "Order Status",
      ]);
      // Format header row bold with subtle background
      sheet.getRange(1, 1, 1, 19).setFontWeight("bold").setBackground("#F3F3F3");
    }

    var lastRow = sheet.getLastRow();

    // Deduplication check: Column Q (17th column) holds Razorpay Payment ID
    if (lastRow > 1) {
      var paymentIdRange = sheet.getRange(2, 17, lastRow - 1, 1).getValues();
      for (var i = 0; i < paymentIdRange.length; i++) {
        if (paymentIdRange[i][0] && paymentIdRange[i][0].toString() === data.razorpayPaymentId.toString()) {
          return ContentService.createTextOutput(
            JSON.stringify({
              status: "already_exists",
              message: "Payment ID already recorded. Duplicate row prevented: " + data.razorpayPaymentId,
              orderId: data.orderId,
            })
          ).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    // Fallback date if not supplied
    var formattedDate = data.orderDate || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy HH:mm:ss");

    // Construct the row matching columns A through S
    var newRow = [
      data.orderId || "",
      formattedDate,
      data.customerName || "",
      "'" + (data.phone || ""), // Prefix with ' to preserve leading zero / format as text
      data.email || "",
      data.address || "",
      data.city || "",
      data.state || "",
      "'" + (data.pincode || ""),
      data.productDetails || "",
      Number(data.quantity) || 1,
      Number(data.subtotal) || 0,
      Number(data.shipping) || 0,
      Number(data.totalAmount) || 0,
      data.currency || "INR",
      data.razorpayOrderId || "",
      data.razorpayPaymentId || "",
      data.paymentStatus || "PAID",
      data.orderStatus || "PLACED",
    ];

    sheet.appendRow(newRow);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        orderId: data.orderId,
        paymentId: data.razorpayPaymentId,
        message: "Order successfully appended to Google Sheet",
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Internal script error: " + err.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Test function you can run directly inside the Google Apps Script IDE to verify access.
 */
function testAppend() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        orderId: "ORD-TEST-001",
        orderDate: "23/09/2026 16:30:00",
        customerName: "Test Customer",
        phone: "9876543210",
        email: "test@rkperfume.in",
        address: "Tulshibaug Internal Rd",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411002",
        productDetails: "ESSPRIVE Aventus (Qty: 1)",
        quantity: 1,
        subtotal: 599,
        shipping: 0,
        totalAmount: 599,
        currency: "INR",
        razorpayOrderId: "order_test_12345",
        razorpayPaymentId: "pay_test_12345",
        paymentStatus: "PAID",
        orderStatus: "PLACED",
      }),
    },
  };

  var res = doPost(mockEvent);
  Logger.log(res.getContent());
}
