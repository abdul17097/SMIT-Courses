import React from "react";
import { ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react";
import Button from "../common/Button";
import { formatPrice } from "../../utils/formatters";

export const CartSummary = ({ items = [], onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.subtotal || (item.price * item.quantity)), 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 10;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
      <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Estimated Shipping</span>
          <span className="font-bold text-slate-900">
            {shipping === 0 ? <span className="text-emerald-600 uppercase font-bold text-xs">Free</span> : formatPrice(shipping)}
          </span>
        </div>

        <div className="flex justify-between text-slate-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-bold text-slate-900">{formatPrice(tax)}</span>
        </div>

        <div className="border-t border-slate-100 pt-3 flex justify-between text-base font-extrabold text-slate-900">
          <span>Total</span>
          <span className="text-xl text-indigo-600">{formatPrice(grandTotal)}</span>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        rightIcon={ArrowRight}
        onClick={onCheckout}
        disabled={items.length === 0}
        className="shadow-xl"
      >
        Proceed to Checkout
      </Button>

      <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 pt-2">
        <ShieldCheck size={16} className="text-emerald-500" />
        <span>Backend Auth Check & Price Protection</span>
      </div>
    </div>
  );
};

export default CartSummary;
