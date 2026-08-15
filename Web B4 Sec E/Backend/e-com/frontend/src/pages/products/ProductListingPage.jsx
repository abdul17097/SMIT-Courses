import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Filter,
  Search,
  X,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  RefreshCcw,
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
import { fetchProductsAsync } from "../../store/slices/productSlice";

const CATEGORY_OPTIONS = [
  "All Categories",
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

  const { products, loading, error } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Filter state
  const searchQueryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";
  const priceSortParam = searchParams.get("price") || "high";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);

  const limit = 8;
  const skip = (pageParam - 1) * limit;

  const [searchQuery, setSearchQuery] = useState(searchQueryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortOrder, setSortOrder] = useState(priceSortParam);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  useEffect(() => {
    const params = {
      limit,
      skip,
      price: sortOrder,
    };
    if (selectedCategory && selectedCategory !== "All Categories") {
      params.category = selectedCategory;
    }
    dispatch(fetchProductsAsync(params));
  }, [dispatch, skip, limit, selectedCategory, sortOrder]);

  // Update URL search parameters
  const updateUrlParams = (newParams) => {
    const current = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        current.set(key, value);
      } else {
        current.delete(key);
      }
    });
    setSearchParams(current);
  };

  const handleCategoryChange = (cat) => {
    const categoryValue = cat === "All Categories" ? "" : cat;
    setSelectedCategory(categoryValue);
    updateUrlParams({ category: categoryValue, page: "1" });
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    setSortOrder(val);
    updateUrlParams({ price: val, page: "1" });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateUrlParams({ q: searchQuery.trim(), page: "1" });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortOrder("high");
    setSearchParams({});
  };

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      toast.info("Please log in to add items to your cart.");
      return;
    }
    toast.success(`${product.name} added to cart!`);
  };

  // Client-side search filtering if search query query param `q` exists
  const filteredProducts = products ? products.filter((item) => {
    if (!searchQueryParam) return true;
    const query = searchQueryParam.toLowerCase();
    return (
      item.name?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    );
  }) : [];

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        {/* Page Title & Breadcrumb Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Product Discovery
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Explore available items with live category filtering and sorting.
            </p>
          </div>

          <div className="flex items-center gap-3">
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

        {/* Top Control Bar: Search & Sorting */}
        <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={Search}
            />
          </form>

          {/* Active Filter Chips & Sorting Selector */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            {(selectedCategory || searchQueryParam) && (
              <Button
                variant="ghost"
                size="sm"
                leftIcon={RefreshCcw}
                onClick={handleClearFilters}
                className="text-xs text-rose-600 hover:bg-rose-50"
              >
                Clear Filters
              </Button>
            )}

            <div className="w-48">
              <Select
                options={SORT_OPTIONS}
                value={sortOrder}
                onChange={handleSortChange}
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Main Grid + Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <SlidersHorizontal size={16} />
                  <span>Categories</span>
                </h3>
              </div>

              <div className="space-y-1">
                {CATEGORY_OPTIONS.map((cat) => {
                  const isActive =
                    (cat === "All Categories" && !selectedCategory) ||
                    selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex w-full items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{cat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Product Cards Grid */}
          <main className="lg:col-span-3 space-y-8">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <ProductCardSkeleton count={6} />
              </div>
            ) : error ? (
              <ErrorState
                title="Unable to fetch products"
                message={
                  error.includes("log in")
                    ? "Please log in to browse products."
                    : error
                }
                onRetry={() => dispatch(fetchProductsAsync({ limit, skip }))}
              />
            ) : filteredProducts.length === 0 ? (
              <EmptyState
                title="No Products Match Your Search"
                description="Try clearing filters or searching with a different term."
                actionLabel="Clear Filters"
                onAction={handleClearFilters}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={pageParam <= 1}
                    leftIcon={ChevronLeft}
                    onClick={() => updateUrlParams({ page: String(pageParam - 1) })}
                  >
                    Previous
                  </Button>

                  <span className="text-xs font-bold text-slate-700">
                    Page {pageParam}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    disabled={products.length < limit}
                    rightIcon={ChevronRight}
                    onClick={() => updateUrlParams({ page: String(pageParam + 1) })}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </main>
        </div>
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        title="Filter Products"
        position="left"
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              Categories
            </h4>
            <div className="space-y-1">
              {CATEGORY_OPTIONS.map((cat) => {
                const isActive =
                  (cat === "All Categories" && !selectedCategory) ||
                  selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      handleCategoryChange(cat);
                      setIsFilterDrawerOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ProductListingPage;
