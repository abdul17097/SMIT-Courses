import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Filter,
  Search,
  X,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import Badge from "../../components/common/Badge";
import EmptyState from "../../components/common/EmptyState";
import ErrorState from "../../components/common/ErrorState";
import ProductCard from "../../components/products/ProductCard";
import ProductCardSkeleton from "../../components/products/ProductCardSkeleton";
import Drawer from "../../components/common/Drawer";
import { APP_ROUTES } from "../../constants/appRoutes";
import { fetchProductsAsync } from "../../store/slices/productSlice";
import { addToCartAsync } from "../../store/slices/cartSlice";

const DEFAULT_CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Sports",
  "Accessories",
  "Audio Tech",
];

const SORT_OPTIONS = [
  { label: "Price: High to Low", value: "high" },
  { label: "Price: Low to High", value: "low" },
];

export const ProductListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Filter state from URL params
  const searchQueryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";
  const priceSortParam = searchParams.get("price") || "high";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);

  const limit = 12;
  const skip = (pageParam - 1) * limit;

  const [searchQuery, setSearchQuery] = useState(searchQueryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortOrder, setSortOrder] = useState(priceSortParam);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Dynamically extract real categories from backend products
  const categoryOptions = useMemo(() => {
    const backendCategories = products.map((p) => p.category).filter(Boolean);
    const combined = Array.from(new Set([...backendCategories, ...DEFAULT_CATEGORIES]));
    return ["All Categories", ...combined];
  }, [products]);

  // Fetch real products from backend API
  useEffect(() => {
    dispatch(
      fetchProductsAsync({
        limit,
        skip,
        category: selectedCategory && selectedCategory !== "All Categories" ? selectedCategory : undefined,
        price: sortOrder,
      })
    );
  }, [dispatch, limit, skip, selectedCategory, sortOrder]);

  // Client-side text search filtering over returned backend products
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    return products.filter((p) =>
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

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

  const handleCategorySelect = (category) => {
    const newCategory = category === "All Categories" ? "" : category;
    setSelectedCategory(newCategory);
    updateQueryParams({ category: newCategory, page: "1" });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    updateQueryParams({ price: value, page: "1" });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateQueryParams({ q: searchQuery, page: "1" });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortOrder("high");
    setSearchParams({});
  };

  const updateQueryParams = (newParams) => {
    const updated = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, val]) => {
      if (val) {
        updated.set(key, val);
      } else {
        updated.delete(key);
      }
    });
    setSearchParams(updated);
  };

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Product Catalog
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Explore products from real backend sellers.
            </p>
          </div>

          {/* Quick Search & Sort Bar */}
          <div className="flex items-center gap-3">
            <form onSubmit={handleSearchSubmit} className="relative flex-1 sm:w-64">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={Search}
                className="py-2.5 text-xs"
              />
            </form>

            <Select
              options={SORT_OPTIONS}
              value={sortOrder}
              onChange={handleSortChange}
              className="w-44 py-2.5 text-xs"
            />

            {/* Mobile Filter Button */}
            <Button
              variant="outline"
              size="sm"
              leftIcon={Filter}
              onClick={() => setIsFilterDrawerOpen(true)}
              className="lg:hidden"
            >
              Filters
            </Button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal size={18} className="text-indigo-600" />
                  <span>Real Categories</span>
                </h3>
                {(selectedCategory || searchQuery) && (
                  <button
                    onClick={handleClearFilters}
                    className="text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Dynamic Category List */}
              <div className="space-y-1">
                {categoryOptions.map((cat) => {
                  const isActive =
                    (!selectedCategory && cat === "All Categories") ||
                    selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`flex w-full items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat}</span>
                      {isActive && <Badge variant="outline" size="sm">Selected</Badge>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Grid Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Active Filter Chips */}
            {(selectedCategory || searchQuery) && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Active Filters:</span>
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-100">
                    Category: {selectedCategory}
                    <button onClick={() => handleCategorySelect("All Categories")} className="cursor-pointer">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                    Query: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="cursor-pointer">
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Loading Grid State */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <ErrorState
                title="Unable to Load Products"
                message={error}
                onRetry={() =>
                  dispatch(
                    fetchProductsAsync({
                      limit,
                      skip,
                      category: selectedCategory && selectedCategory !== "All Categories" ? selectedCategory : undefined,
                      price: sortOrder,
                    })
                  )
                }
              />
            )}

            {/* Empty State */}
            {!loading && !error && filteredProducts.length === 0 && (
              <EmptyState
                title="No Products Found"
                description="We couldn't find any products matching your selected category or search query."
                actionLabel="Reset All Filters"
                onAction={handleClearFilters}
              />
            )}

            {/* Real Product Grid */}
            {!loading && !error && filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {!loading && !error && products.length >= limit && (
              <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={ChevronLeft}
                  disabled={pageParam <= 1}
                  onClick={() => updateQueryParams({ page: (pageParam - 1).toString() })}
                >
                  Previous
                </Button>

                <span className="text-xs font-semibold text-slate-600">
                  Page {pageParam}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  rightIcon={ChevronRight}
                  onClick={() => updateQueryParams({ page: (pageParam + 1).toString() })}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        title="Filter Products"
      >
        <div className="space-y-6 py-4">
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3">Categories</h4>
            <div className="space-y-1">
              {categoryOptions.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    handleCategorySelect(cat);
                    setIsFilterDrawerOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ProductListingPage;
