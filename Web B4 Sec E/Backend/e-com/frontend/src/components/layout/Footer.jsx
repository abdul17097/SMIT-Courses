import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";
import Container from "../common/Container";
import { APP_ROUTES } from "../../constants/appRoutes";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      {/* Value Proposition Highlights */}
      <div className="border-b border-slate-800 py-10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Free Fast Shipping</h4>
                <p className="text-xs text-slate-400 mt-0.5">On orders over $99</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Secure Checkout</h4>
                <p className="text-xs text-slate-400 mt-0.5">Protected by Stripe encryption</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 shrink-0">
                <RotateCcw size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Easy 30-Day Returns</h4>
                <p className="text-xs text-slate-400 mt-0.5">Hassle-free money back</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 shrink-0">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Flexible Payment</h4>
                <p className="text-xs text-slate-400 mt-0.5">Cards, Google Pay & Apple Pay</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand column */}
            <div className="md:col-span-1 space-y-4">
              <Link to={APP_ROUTES.HOME} className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-md shadow-indigo-500/20">
                  <Sparkles size={20} />
                </div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  AuraStore
                </span>
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                Discover curated premium products built with exceptional design, modern technology, and customer-first quality.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Shop Navigation
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to={APP_ROUTES.HOME} className="hover:text-indigo-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={APP_ROUTES.PRODUCTS} className="hover:text-indigo-400 transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to={APP_ROUTES.CART} className="hover:text-indigo-400 transition-colors">
                    View Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Customer Care
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to={APP_ROUTES.PROFILE} className="hover:text-indigo-400 transition-colors">
                    My Account Profile
                  </Link>
                </li>
                <li>
                  <Link to={APP_ROUTES.ORDERS} className="hover:text-indigo-400 transition-colors">
                    Track Orders
                  </Link>
                </li>
                <li>
                  <span className="text-slate-500">24/7 Support Desk</span>
                </li>
              </ul>
            </div>

            {/* Newsletter / Security */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Trust & Security
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                All transactions are encrypted end-to-end via official Stripe gateway.
              </p>
              <div className="flex items-center space-x-2 text-slate-500">
                <span className="text-xs font-medium bg-slate-800 px-2.5 py-1 rounded-lg">VISA</span>
                <span className="text-xs font-medium bg-slate-800 px-2.5 py-1 rounded-lg">MasterCard</span>
                <span className="text-xs font-medium bg-slate-800 px-2.5 py-1 rounded-lg">Stripe</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} AuraStore Inc. All rights reserved.</p>
            <div className="flex space-x-4 text-xs">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
