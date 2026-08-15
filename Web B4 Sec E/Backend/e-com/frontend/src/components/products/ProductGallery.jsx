import React, { useState } from "react";
import { Package } from "lucide-react";

export const ProductGallery = ({ images = [], productName = "Product" }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square w-full rounded-3xl bg-slate-100 flex flex-col items-center justify-center text-slate-400 border border-slate-200/80 shadow-inner">
        <Package size={80} strokeWidth={1.2} />
        <span className="text-sm font-semibold mt-2">No Image Available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-md">
        <img
          src={images[selectedImage] || images[0]}
          alt={`${productName} view ${selectedImage + 1}`}
          className="h-full w-full object-cover object-center transition-all duration-300"
        />
      </div>

      {/* Thumbnail Bar */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition-all cursor-pointer ${
                selectedImage === idx
                  ? "border-indigo-600 ring-2 ring-indigo-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
