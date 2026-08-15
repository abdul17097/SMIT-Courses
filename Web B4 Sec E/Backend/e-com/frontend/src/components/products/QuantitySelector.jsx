import React from "react";
import { Minus, Plus } from "lucide-react";

export const QuantitySelector = ({
  quantity = 1,
  maxStock = 99,
  onChange,
  disabled = false,
}) => {
  const handleDecrement = () => {
    if (quantity > 1 && !disabled) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxStock && !disabled) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 mr-2">
        Quantity
      </span>
      <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || quantity <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>

        <span className="w-10 text-center text-sm font-extrabold text-slate-900">
          {quantity}
        </span>

        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || quantity >= maxStock}
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      <span className="text-xs text-slate-400 ml-2">
        ({maxStock} available)
      </span>
    </div>
  );
};

export default QuantitySelector;
