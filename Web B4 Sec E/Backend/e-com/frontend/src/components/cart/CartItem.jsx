import React from "react";
import { Trash2, Package } from "lucide-react";
import Badge from "../common/Badge";
import QuantitySelector from "../products/QuantitySelector";
import { formatPrice } from "../../utils/formatters";

export const CartItem = ({ item, onUpdateQuantity, onDeleteItem }) => {
  const { name, description, price, category, quantity, subtotal, productId } = item;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 shadow-sm gap-4">
      <div className="flex items-center space-x-4 flex-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
          <Package size={28} />
        </div>

        <div className="space-y-1">
          <Badge variant="primary" size="sm">
            {category || "General"}
          </Badge>
          <h4 className="text-base font-bold text-slate-900 line-clamp-1">{name}</h4>
          <p className="text-xs text-slate-500 line-clamp-1">{description}</p>
          <span className="text-xs font-semibold text-slate-700 block sm:hidden pt-1">
            Unit Price: {formatPrice(price)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        <span className="hidden sm:block text-xs font-medium text-slate-500">
          {formatPrice(price)}
        </span>

        {/* Quantity Controls */}
        <QuantitySelector
          quantity={quantity}
          maxStock={99}
          onChange={(newQty) => onUpdateQuantity && onUpdateQuantity(item, newQty)}
        />

        {/* Subtotal */}
        <div className="text-right min-w-[80px]">
          <span className="text-xs text-slate-400 block font-medium">Subtotal</span>
          <span className="text-sm font-extrabold text-slate-900">
            {formatPrice(subtotal || price * quantity)}
          </span>
        </div>

        {/* Delete */}
        <button
          onClick={() => onDeleteItem && onDeleteItem(item)}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
          title="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
