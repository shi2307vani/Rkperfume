// Utility script to test Google Apps Script Webhook connection using environment variables
const https = require('https');
const { URL } = require('url');

const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

if (!webhookUrl) {
  console.error("Please set GOOGLE_SHEET_WEBHOOK_URL environment variable.");
  process.exit(1);
}

const payload = JSON.stringify({
  orderId: "ORD-TEST-CLI",
  orderDate: new Date().toLocaleDateString("en-IN"),
  customerName: "Test Customer",
  phone: "9876543210",
  email: "test@rkperfume.in",
  address: "Tulshibaug Internal Rd",
  city: "Pune",
  state: "Maharashtra",
  pincode: "411002",
  productDetails: "ESSPRIVE Sample Tester Flacon (Qty: 1)",
  quantity: 1,
  subtotal: 1,
  shipping: 0,
  totalAmount: 1,
  currency: "INR",
  razorpayOrderId: "order_test_cli",
  razorpayPaymentId: "pay_test_" + Date.now(),
  paymentStatus: "PAID",
  orderStatus: "PLACED"
});

function postToGoogleAppsScript(urlStr, data) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(urlStr);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      if (res.statusCode === 302 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          let body = '';
          redirectRes.on('data', (chunk) => body += chunk);
          redirectRes.on('end', () => resolve(body));
        }).on('error', reject);
        return;
      }

      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => resolve(body));
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

postToGoogleAppsScript(webhookUrl, payload)
  .then(res => console.log("Google Apps Script response:", res))
  .catch(err => console.error("Error:", err));
