"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  Truck,
  ArrowLeft,
  AlertCircle,
  CreditCard,
  ShoppingBag,
} from "lucide-react";
import { RazorpayOptions, RazorpayPaymentSuccessResponse } from "@/types/razorpay";

export default function CheckoutPage() {
  const { items, subtotal, totalItems, clearCart } = useCart();
  const router = useRouter();

  // Customer Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    const normalizedPhone =
      cleanPhone.length === 12 && cleanPhone.startsWith("91")
        ? cleanPhone.slice(2)
        : cleanPhone;

    if (!normalizedPhone) {
      errs.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      errs.phone = "Enter a valid 10-digit Indian mobile number (e.g. 9876543210)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Enter a valid email address";
    }

    if (!formData.address.trim()) {
      errs.address = "Delivery address is required";
    }

    if (!formData.city.trim()) {
      errs.city = "City is required";
    }

    if (!formData.state.trim()) {
      errs.state = "State is required";
    }

    const cleanPincode = formData.pincode.replace(/\D/g, "");
    if (!cleanPincode) {
      errs.pincode = "PIN code is required";
    } else if (!/^\d{6}$/.test(cleanPincode)) {
      errs.pincode = "Enter a valid 6-digit PIN code (e.g. 411002)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (items.length === 0) {
      setGeneralError("Your shopping bag is empty. Please add a perfume before checkout.");
      return;
    }

    if (!validateForm()) {
      setGeneralError("Please fill out all required fields correctly.");
      return;
    }

    if (typeof window === "undefined" || !window.Razorpay) {
      setGeneralError("Payment gateway is initializing. Please check your internet connection and try again.");
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create Order on server
      const orderPayload = {
        items: items.map((i) => ({ id: i.id, quantity: i.quantity })),
        customer: {
          ...formData,
          phone: formData.phone.replace(/\D/g, "").slice(-10),
        },
      };

      const createRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const orderData = await createRes.json();

      if (!createRes.ok || !orderData.success) {
        throw new Error(orderData.error || "Failed to create order");
      }

      // Step 2: Open Razorpay Checkout modal
      const razorpayKey =
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder";

      const options: RazorpayOptions = {
        key: razorpayKey,
        amount: orderData.amount, // in paise
        currency: orderData.currency || "INR",
        name: "RK Perfume",
        description: `Order ${orderData.orderId} - Luxury Extrait Fragrances`,
        image: "/images/logo_header.png",
        order_id: orderData.razorpayOrderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone.replace(/\D/g, "").slice(-10),
        },
        theme: {
          color: "#1A2024",
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
            setGeneralError("Payment was cancelled. Your shopping bag is still saved.");
          },
        },
        handler: async (response: RazorpayPaymentSuccessResponse) => {
          try {
            // Step 3: Verify payment on server
            const verifyPayload = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: orderData.orderId,
              customer: formData,
              productDetails: orderData.productDetails,
              totalQuantity: orderData.totalQuantity,
              subtotal: orderData.subtotal,
              shipping: orderData.shipping,
              totalAmount: orderData.totalAmount,
            };

            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(verifyPayload),
            });

            const verifyData = await verifyRes.json();

            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(
                verifyData.error || "Payment signature verification failed"
              );
            }

            // Step 4: Clear cart and redirect to order success page
            clearCart();
            sessionStorage.setItem(
              "last_order",
              JSON.stringify({
                orderId: orderData.orderId,
                paymentId: response.razorpay_payment_id,
                customer: formData,
                items,
                totalAmount: orderData.totalAmount,
                date: new Date().toLocaleDateString("en-IN"),
              })
            );

            router.push(`/order-success?orderId=${orderData.orderId}&paymentId=${response.razorpay_payment_id}`);
          } catch (verifyErr: any) {
            console.error("Verification error:", verifyErr);
            setIsProcessing(false);
            setGeneralError(
              verifyErr.message ||
                "Payment received but verification failed. Please contact RK Perfume support with your payment ID."
            );
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: any) {
      console.error("Order error:", err);
      setIsProcessing(false);
      setGeneralError(
        err.message || "An error occurred while creating your order. Please try again."
      );
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F6F3] pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center py-20 bg-white border border-black/[0.08] p-8 shadow-xs">
          <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4 text-[#8E98A0]">
            <ShoppingBag size={28} />
          </div>
          <h2 className="font-heading text-2xl uppercase tracking-wider text-[#1A2024] mb-3">
            Your shopping bag is empty
          </h2>
          <p className="text-sm text-[#5A646B] mb-8 font-light max-w-md mx-auto">
            Explore our curated catalog of luxury Extrait de Parfum and find your signature scent.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors"
          >
            <span>Explore Collections</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3] pt-28 sm:pt-36 pb-24 text-[#1A2024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#5A646B] hover:text-[#1A2024] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
            Secure Checkout
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl uppercase tracking-[0.12em] font-normal">
            Complete Your Order
          </h1>
        </div>

        {/* General Error Banner */}
        {generalError && (
          <div className="mb-8 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3">
            <AlertCircle size={18} className="shrink-0 text-rose-600 mt-0.5" />
            <div className="flex-1 font-medium">{generalError}</div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Customer Form */}
          <div className="lg:col-span-7 bg-white border border-black/[0.08] p-6 sm:p-8 shadow-xs">
            <h2 className="font-heading text-lg uppercase tracking-[0.14em] font-medium text-[#1A2024] pb-4 border-b border-black/[0.08] mb-6 flex items-center justify-between">
              <span>1. Customer & Shipping Details</span>
              <span className="text-[11px] font-sans text-[#8E98A0] font-normal normal-case">
                * All fields required
              </span>
            </h2>

            <form onSubmit={handlePayNow} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rakesh Deshmukh"
                  className={`w-full px-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                    errors.name ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                    Mobile Number (10 Digits)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 text-xs text-[#8E98A0] font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      className={`w-full pl-12 pr-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                        errors.phone ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="customer@gmail.com"
                    className={`w-full px-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                      errors.email ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                  Delivery Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Flat/House No., Building, Street Name, Landmark"
                  className={`w-full px-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                    errors.address ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                  }`}
                />
                {errors.address && (
                  <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.address}</p>
                )}
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Pune"
                    className={`w-full px-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                      errors.city ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Maharashtra"
                    className={`w-full px-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                      errors.state ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                    }`}
                  />
                  {errors.state && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#5A646B] font-medium mb-1.5">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 411002"
                    maxLength={6}
                    className={`w-full px-4 py-3 bg-[#F7F6F3] border text-sm text-[#1A2024] focus:outline-none focus:border-[#1A2024] transition-colors ${
                      errors.pincode ? "border-rose-400 bg-rose-50/20" : "border-black/10"
                    }`}
                  />
                  {errors.pincode && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.pincode}</p>
                  )}
                </div>
              </div>

              {/* Submit CTA (Desktop & Mobile) */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#1A2024] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-all flex items-center justify-center gap-3 cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Lock size={15} className="text-[#C5A059]" />
                  <span>
                    {isProcessing ? "Connecting to Razorpay..." : `Pay ₹${subtotal} with Razorpay`}
                  </span>
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-[#8E98A0]">
                  <CreditCard size={13} />
                  <span>UPI, Google Pay, PhonePe, Paytm, Cards & NetBanking</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-black/[0.08] p-6 sm:p-8 shadow-xs">
              <h2 className="font-heading text-lg uppercase tracking-[0.14em] font-medium text-[#1A2024] pb-4 border-b border-black/[0.08] mb-6 flex items-center justify-between">
                <span>Order Summary</span>
                <span className="text-xs text-[#8E98A0]">({totalItems} items)</span>
              </h2>

              {/* Items List */}
              <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center pb-4 border-b border-black/[0.04] last:border-b-0"
                  >
                    <div className="w-16 h-16 bg-[#F7F6F3] border border-black/[0.05] p-1 shrink-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-xs uppercase tracking-wide text-[#1A2024] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#8E98A0] font-light">
                        Qty: {item.quantity} &middot; {item.size}
                      </p>
                    </div>
                    <span className="font-heading text-sm font-semibold text-[#1A2024]">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtotal & Totals */}
              <div className="pt-6 border-t border-black/[0.08] space-y-2 text-xs text-[#5A646B]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#1A2024] font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pan-India Shipping</span>
                  <span className="text-emerald-700 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-base font-heading font-semibold text-[#1A2024] pt-3 border-t border-black/[0.06]">
                  <span>Total Amount</span>
                  <span className="text-lg">₹{subtotal}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-black/[0.06] space-y-2.5 text-xs text-[#5A646B] font-light">
                <div className="flex items-center gap-2.5">
                  <Truck size={14} className="text-[#C5A059] shrink-0" />
                  <span>Pan-India Dispatch via Express Courier</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={14} className="text-[#C5A059] shrink-0" />
                  <span>100% Genuine Fragrances directly from Tulshibaug, Pune</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Lock size={14} className="text-[#C5A059] shrink-0" />
                  <span>256-Bit SSL Encrypted Razorpay Gateway</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
