import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Package } from "lucide-react";
import Badge from "../common/Badge";
import Button from "../common/Button";
import { formatPrice } from "../../utils/formatters";
import { APP_ROUTES } from "../../constants/appRoutes";

export const ProductCard = ({ product, onAddToCart }) => {
  const { _id, name, description, price, category, images, stock } = product;

  const imageUrl = images && images.length > 0 ? images[0] : null;
  const isOutOfStock = stock <= 0;

  return (
    <div className="group relative flex flex-col rounded-3xl bg-white p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-300">
            <Package size={48} strokeWidth={1.5} />
            <span className="text-[11px] font-semibold mt-1">No Image</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="primary" size="sm">
            {category || "General"}
          </Badge>
          {isOutOfStock ? (
            <Badge variant="danger" size="sm">
              Out of Stock
            </Badge>
          ) : (
            <Badge variant="success" size="sm">
              In Stock
            </Badge>
          )}
        </div>

        {/* Hover Quick Action */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link
            to={APP_ROUTES.PRODUCT_DETAILS.replace(":id", _id)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-800 shadow-lg hover:bg-indigo-600 hover:text-white transition-colors"
            title="View Details"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Link
            to={APP_ROUTES.PRODUCT_DETAILS.replace(":id", _id)}
            className="block text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors line-clamp-1 mb-1"
          >
            {name}
          </Link>
          <p className="text-xs text-slate-500 line-clamp-2 mb-3">
            {description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Price</span>
            <span className="text-lg font-extrabold text-slate-900">
              {formatPrice(price)}
            </span>
          </div>

          <Button
            variant={isOutOfStock ? "outline" : "primary"}
            size="sm"
            disabled={isOutOfStock}
            onClick={() => onAddToCart && onAddToCart(product)}
            leftIcon={ShoppingCart}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
