import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  Store,
  Laptop,
  Shirt,
  Home as HomeIcon,
  Dumbbell,
  Watch,
  Headphones,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import SectionHeader from "../../components/common/SectionHeader";
import EmptyState from "../../components/common/EmptyState";
import ErrorState from "../../components/common/ErrorState";
import ProductCard from "../../components/products/ProductCard";
import ProductCardSkeleton from "../../components/products/ProductCardSkeleton";
import { APP_ROUTES } from "../../constants/appRoutes";
import { fetchProductsAsync } from "../../store/slices/productSlice";

const CATEGORIES = [
  { name: "Electronics", icon: Laptop, count: "120+ Products" },
  { name: "Fashion", icon: Shirt, count: "250+ Products" },
  { name: "Home & Living", icon: HomeIcon, count: "80+ Products" },
  { name: "Sports", icon: Dumbbell, count: "95+ Products" },
  { name: "Accessories", icon: Watch, count: "140+ Products" },
  { name: "Audio Tech", icon: Headphones, count: "60+ Products" },
];

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProductsAsync({ limit: 8 }));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      toast.info("Please log in to add items to your cart.");
      navigate(APP_ROUTES.LOGIN);
      return;
    }
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-700 to-violet-800 p-8 sm:p-14 lg:p-20 text-white shadow-2xl overflow-hidden">
            {/* Background Glow Circles */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-md border border-white/10">
                  <Sparkles size={14} className="text-amber-300" />
                  <span>Next-Gen E-Commerce Shopping</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Discover Curated Premium Products.
                </h1>

                <p className="text-base sm:text-lg text-indigo-100 max-w-xl leading-relaxed">
                  Explore top-quality products across electronics, fashion, home essentials, and lifestyle gear with instant checkout.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={ArrowRight}
                    onClick={() => navigate(APP_ROUTES.PRODUCTS)}
                    className="bg-white text-indigo-900 hover:bg-slate-100 shadow-xl"
                  >
                    Explore Products
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate(APP_ROUTES.SIGNUP)}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Create Account
                  </Button>
                </div>
              </div>

              {/* Hero Image Showcase Card */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-80 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-left transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Featured Pick</span>
                    <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-white/20 mb-4 flex items-center justify-center">
                    <ShoppingBag size={64} className="text-white/80" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Smart Wireless Audio</h3>
                  <p className="text-xs text-indigo-200 mt-1">Noise Cancelling Studio Headphones</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-extrabold text-white">$249.99</span>
                    <Button size="sm" variant="primary" className="bg-white text-indigo-900 hover:bg-slate-100">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Showcase Section */}
      <section>
        <Container>
          <SectionHeader
            title="Browse Popular Categories"
            subtitle="Find items by exploring top active shop categories"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  onClick={() => navigate(`${APP_ROUTES.PRODUCTS}?category=${encodeURIComponent(cat.name)}`)}
                  className="group flex flex-col items-center justify-center p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-3">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 text-center line-clamp-1">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-400 mt-1">
                    {cat.count}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Featured Products Grid Section */}
      <section className="bg-slate-50/80 py-12 border-y border-slate-100">
        <Container>
          <SectionHeader
            title="Featured Products"
            subtitle="Discover top-rated products from verified sellers"
            actionLabel="View All Products"
            onAction={() => navigate(APP_ROUTES.PRODUCTS)}
          />

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ProductCardSkeleton count={8} />
            </div>
          ) : error ? (
            <ErrorState
              title="Unable to load products"
              message={
                error.includes("log in")
                  ? "Please log in to browse seller products."
                  : error
              }
              onRetry={() => dispatch(fetchProductsAsync({ limit: 8 }))}
            />
          ) : !products || products.length === 0 ? (
            <EmptyState
              title="No Products Available"
              description="Sellers haven't posted any products yet. Check back soon!"
              actionLabel="Browse Categories"
              onAction={() => navigate(APP_ROUTES.PRODUCTS)}
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Seller Onboarding Callout Banner */}
      <section>
        <Container>
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-left max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-400">
                <Store size={14} />
                <span>Merchant Hub</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want to sell products on AuraStore?
              </h2>
              <p className="text-sm text-slate-400">
                Register as a Seller today to list your items, manage stock inventory, and reach thousands of active buyers.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate(APP_ROUTES.SIGNUP)}
              rightIcon={ArrowRight}
              className="shrink-0 bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20"
            >
              Become a Seller
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
