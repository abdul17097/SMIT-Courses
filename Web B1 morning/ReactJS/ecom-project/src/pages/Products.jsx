import React from "react";
import { products } from "../constants/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";



const Products = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  const handleAddToCart = (product) => {
    if (!auth.email) {
      navigate("/login")
    } else {

      dispatch(addToCart(product))
    }
  }
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Featured Products</h1>
            <p className="mt-2 text-lg text-slate-600">Discover our curated selection of premium technology.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
              View All <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-lg">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-pink-500 text-white shadow-lg">
                      SALE
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">{product.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-slate-500 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                  <button
                    onClick={handleAddToCart}
                    className="inline-flex items-center justify-center p-2 rounded-full bg-slate-900 text-white hover:bg-indigo-600 transition-all duration-200 transform hover:rotate-12 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
