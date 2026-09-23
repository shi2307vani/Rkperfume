// Utility script to verify Razorpay credentials from environment variables
const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

async function testRazorpay() {
  if (!keyId || !keySecret) {
    console.error("Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.");
    process.exit(1);
  }

  console.log("Testing Razorpay order creation with credentials from environment...");
  const authHeader = `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`;

  try {
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({
        amount: 100, // 1 INR in paise
        currency: "INR",
        receipt: `ORD-TEST-${Date.now().toString().slice(-4)}`,
        notes: { test: "cli_verification" },
      }),
    });

    const data = await res.json();
    console.log("Razorpay Response Status:", res.status);
    console.log("Razorpay Response Data:", data);
  } catch (err) {
    console.error("Razorpay Error:", err);
  }
}

testRazorpay();
