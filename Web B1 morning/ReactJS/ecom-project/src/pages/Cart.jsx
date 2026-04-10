import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()
  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <div className="text-center">
          <div className="bg-white p-8 rounded-full shadow-sm mb-6 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mt-2 text-slate-500">Looks like you haven't added anything yet.</p>
          <button
            onClick={() => window.location.reload()} // For simplicity in this demo to go back
            className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-10 tracking-tight">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-24 h-24 flex-shrink-0 bg-slate-100 rounded-xl overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 truncate">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.category}</p>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        className="px-3 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-sm font-bold text-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                        className="px-3 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-xs text-slate-400 mt-1">${item.price.toFixed(2)} each</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-xs">Free</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black text-indigo-600">${cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl hover:bg-indigo-600 transition-all transform hover:-translate-y-1 active:translate-y-0">
                Checkout Now
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Secure SSL Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
