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
import { addToCartAsync } from "../../store/slices/cartSlice";

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

  const handleAddToCart = async (product) => {
    if (!isAuthenticated) {
      toast.info("Please log in to add items to your cart.");
      navigate(APP_ROUTES.LOGIN);
      return;
    }

    const result = await dispatch(
      addToCartAsync({ productId: product._id, requestedQuantity: 1 })
    );

    if (addToCartAsync.fulfilled.match(result)) {
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error(result.payload || "Failed to add item to cart.");
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 p-8 sm:p-12 md:p-16 text-white shadow-2xl overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative max-w-2xl space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/10">
                <Sparkles size={16} className="text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
                  Next-Gen Modern Store
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Discover Curated Products for Everyday Life.
              </h1>

              <p className="text-base sm:text-lg text-indigo-200 leading-relaxed">
                Explore top quality items from verified merchants. Enjoy fast shipping, secure payment gateways, and effortless shopping.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to={APP_ROUTES.PRODUCTS}>
                  <Button variant="primary" size="lg" rightIcon={ArrowRight} className="shadow-lg">
                    Shop Catalog
                  </Button>
                </Link>
                {!isAuthenticated && (
                  <Link to={APP_ROUTES.SIGNUP}>
                    <Button variant="secondary" size="lg">
                      Join Store
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Showcase Section */}
      <section>
        <Container>
          <SectionHeader
            title="Browse by Category"
            subtitle="Explore products by top categories."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  to={`${APP_ROUTES.PRODUCTS}?category=${cat.name}`}
                  className="group flex flex-col items-center justify-center p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-xl transition-all text-center space-y-3 cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{cat.name}</h4>
                    <span className="text-[11px] font-semibold text-slate-400">{cat.count}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Trending Products Section */}
      <section>
        <Container>
          <SectionHeader
            title="Trending Products"
            subtitle="Handpicked bestsellers available right now."
            actionText="View All Products"
            onActionClick={() => navigate(APP_ROUTES.PRODUCTS)}
          />

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          )}

          {error && !loading && (
            <ErrorState
              title="Unable to load products"
              message={error}
              onRetry={() => dispatch(fetchProductsAsync({ limit: 8 }))}
            />
          )}

          {!loading && !error && products.length === 0 && (
            <EmptyState
              title="No Products Available"
              description="There are currently no products listed in the store."
              actionLabel="Refresh Page"
              onAction={() => dispatch(fetchProductsAsync({ limit: 8 }))}
            />
          )}

          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
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

      {/* Seller Hub Callout */}
      <section>
        <Container>
          <div className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 rounded-full bg-amber-500/10 px-3 py-1 text-amber-400 text-xs font-bold border border-amber-500/20">
                <Store size={14} />
                <span>Merchant Hub</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Want to Sell Your Own Products?
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Register as a Merchant Seller on AuraStore and start listing your products directly to buyers worldwide.
              </p>
            </div>

            <Link to={`${APP_ROUTES.SIGNUP}?role=SELLER`}>
              <Button variant="primary" size="lg" rightIcon={ArrowRight} className="shrink-0 shadow-lg">
                Become a Seller
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
