"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ShoppingBag, ArrowRight, MessageCircle, MapPin, Package, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface OrderData {
  orderId: string;
  paymentId: string;
  customer?: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items?: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size?: string;
  }[];
  totalAmount?: number;
  date?: string;
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const queryOrderId = searchParams.get("orderId");
  const queryPaymentId = searchParams.get("paymentId");

  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("last_order");
      if (stored) {
        const parsed = JSON.parse(stored);
        setOrder(parsed);
      } else {
        setOrder({
          orderId: queryOrderId || "ORD-CONFIRMED",
          paymentId: queryPaymentId || "pay_verified",
        });
      }
    } catch {
      setOrder({
        orderId: queryOrderId || "ORD-CONFIRMED",
        paymentId: queryPaymentId || "pay_verified",
      });
    }
  }, [queryOrderId, queryPaymentId]);

  const orderId = order?.orderId || queryOrderId || "ORD-CONFIRMED";
  const paymentId = order?.paymentId || queryPaymentId || "pay_verified";

  return (
    <div className="min-h-screen bg-[#F7F6F3] pt-28 sm:pt-36 pb-24 text-[#1A2024]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Receipt Box */}
        <div className="bg-white border border-black/[0.08] p-8 sm:p-12 shadow-sm text-center">
          {/* Success Animated Badge */}
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-emerald-100">
            <CheckCircle2 size={44} />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
            Payment Verified & Recorded
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl uppercase tracking-[0.14em] font-normal mb-3 text-[#1A2024]">
            Order Placed Successfully!
          </h1>
          <p className="text-xs sm:text-sm text-[#5A646B] font-light max-w-md mx-auto mb-8 leading-relaxed">
            Thank you for shopping with RK Perfume. Your payment has been authenticated, and your luxury fragrance is now queued for careful flacon bottling and express dispatch.
          </p>

          {/* Key Reference Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left bg-[#F7F6F3] p-5 border border-black/[0.04]">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] block">
                Application Order ID
              </span>
              <span className="font-mono text-sm font-semibold text-[#1A2024]">
                {orderId}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] block">
                Razorpay Payment ID
              </span>
              <span className="font-mono text-sm font-semibold text-[#1A2024]">
                {paymentId}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] block">
                Payment Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> PAID
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8E98A0] block">
                Order Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A2024]">
                <Package size={13} className="text-[#C5A059]" /> PLACED
              </span>
            </div>
          </div>

          {/* Items Summary */}
          {order?.items && order.items.length > 0 && (
            <div className="mb-8 text-left border-t border-black/[0.08] pt-6">
              <h3 className="font-heading text-xs uppercase tracking-[0.18em] text-[#1A2024] font-medium mb-4">
                Ordered Items
              </h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <div>
                      <span className="font-medium text-[#1A2024] uppercase tracking-wider">
                        {item.name}
                      </span>
                      <span className="text-[#8E98A0] ml-2 font-light">
                        Qty: {item.quantity} {item.size ? `(${item.size})` : ""}
                      </span>
                    </div>
                    <span className="font-heading font-semibold text-[#1A2024]">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {order.totalAmount && (
                <div className="flex justify-between items-center text-sm font-heading font-semibold text-[#1A2024] pt-4 mt-4 border-t border-black/[0.06]">
                  <span>Total Paid (INR)</span>
                  <span className="text-base">₹{order.totalAmount}</span>
                </div>
              )}
            </div>
          )}

          {/* Customer Address Details */}
          {order?.customer && (
            <div className="mb-8 text-left bg-white border border-black/[0.06] p-4 text-xs">
              <div className="flex items-center gap-2 text-[#C5A059] font-medium uppercase tracking-wider mb-2">
                <MapPin size={14} />
                <span>Shipping Address</span>
              </div>
              <p className="font-medium text-[#1A2024]">{order.customer.name}</p>
              <p className="text-[#5A646B]">{order.customer.address}</p>
              <p className="text-[#5A646B]">
                {order.customer.city}, {order.customer.state} - {order.customer.pincode}
              </p>
              <p className="text-[#8E98A0] mt-1 font-mono">
                Phone: +91 {order.customer.phone} &middot; Email: {order.customer.email}
              </p>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-black/[0.08]">
            <Link
              href="/collections"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href={`${BUSINESS_INFO.social.whatsapp}?text=${encodeURIComponent(
                `Hi RK Perfume! I placed order ${orderId} (${paymentId}). Could you please share updates on my shipment?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 border border-black/15 text-[#1A2024] text-xs uppercase tracking-[0.16em] font-medium hover:border-black transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} className="text-emerald-700" />
              <span>WhatsApp Order Support</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-[11px] text-[#8E98A0]">
            <ShieldCheck size={14} className="text-[#C5A059]" />
            <span>Store address: Tulshibaug, Budhwar Peth, Pune 411002</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F6F3] pt-36 pb-20 text-center text-xs tracking-widest text-[#5A646B] uppercase">
          Loading order confirmation...
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
