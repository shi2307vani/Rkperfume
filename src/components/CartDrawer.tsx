"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const router = useRouter();

  const handleCheckoutClick = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#F7F6F3] shadow-2xl flex flex-col border-l border-black/10"
          >
            {/* Header */}
            <div className="p-6 bg-white border-b border-black/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={18} className="text-[#C5A059]" />
                <h3 className="font-heading text-lg font-medium uppercase tracking-[0.14em] text-[#1A2024]">
                  Shopping Bag ({totalItems})
                </h3>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 text-[#5A646B] hover:text-[#1A2024] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content / Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-[#8E98A0] mb-4">
                    <ShoppingBag size={28} />
                  </div>
                  <h4 className="font-heading text-base uppercase tracking-wider text-[#1A2024] mb-2">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-[#5A646B] max-w-xs mb-6 font-light leading-relaxed">
                    Discover our luxury extrait de parfum and Arabian attar collection inspired by the world&apos;s finest scents.
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-[#1A2024] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-black transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-black/[0.08] flex gap-4 items-center shadow-xs"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-[#F7F6F3] border border-black/[0.04] p-1 shrink-0 flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-sm text-[#1A2024] uppercase tracking-wide truncate mb-0.5">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#8E98A0] font-light mb-2">
                        {item.size}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-sm font-semibold text-[#1A2024]">
                          ₹{item.price}
                        </span>

                        {/* Quantity Counter */}
                        <div className="flex items-center border border-black/15 bg-[#F7F6F3]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-black/5 text-[#1A2024] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2.5 text-xs font-medium text-[#1A2024]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-black/5 text-[#1A2024] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Action */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-[#8E98A0] hover:text-rose-600 transition-colors cursor-pointer self-start"
                      title="Remove product"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-black/[0.08] space-y-4">
                {/* Shipping badge */}
                <div className="flex items-center gap-2 text-xs text-[#5A646B] bg-[#F7F6F3] p-2.5 border border-black/[0.04]">
                  <Truck size={14} className="text-[#C5A059] shrink-0" />
                  <span>Complimentary Pan-India Express Delivery</span>
                </div>

                {/* Subtotal */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#5A646B]">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#5A646B]">
                    <span>Shipping</span>
                    <span className="text-emerald-700 font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between text-base font-heading font-semibold text-[#1A2024] pt-2 border-t border-black/[0.06]">
                    <span>Estimated Total</span>
                    <span>₹{subtotal}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3.5 bg-[#1A2024] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#8E98A0] uppercase tracking-wider">
                  <ShieldCheck size={12} className="text-[#C5A059]" />
                  <span>100% Genuine &middot; Secure Razorpay Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
