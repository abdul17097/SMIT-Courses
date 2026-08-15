import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Store,
  ChevronRight,
  Package,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import ErrorState from "../../components/common/ErrorState";
import ProductGallery from "../../components/products/ProductGallery";
import QuantitySelector from "../../components/products/QuantitySelector";
import ProductDetailsSkeleton from "../../components/products/ProductDetailsSkeleton";
import ProductCard from "../../components/products/ProductCard";
import { formatPrice } from "../../utils/formatters";
import { APP_ROUTES } from "../../constants/appRoutes";
import { fetchProductDetailsAsync, fetchProductsAsync } from "../../store/slices/productSlice";
import cartService from "../../services/cartService";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct, products, loading, error } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetailsAsync(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct?.category) {
      dispatch(fetchProductsAsync({ category: selectedProduct.category, limit: 4 }));
    }
  }, [dispatch, selectedProduct?.category]);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.info("Please log in to add items to your cart.");
      navigate(APP_ROUTES.LOGIN);
      return;
    }

    try {
      setAddingToCart(true);
      await cartService.addToCart(selectedProduct._id, quantity);
      toast.success(`${selectedProduct.name} added to cart!`);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || "Failed to add item to cart.";
      toast.error(msg);
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading && !selectedProduct) {
    return <ProductDetailsSkeleton />;
  }

  if (error || !selectedProduct) {
    return (
      <Container className="py-16">
        <ErrorState
          title="Product Not Found"
          message={error || "The product you are looking for does not exist or has been removed."}
          onRetry={() => navigate(APP_ROUTES.PRODUCTS)}
        />
      </Container>
    );
  }

  const { name, description, price, category, images, stock } = selectedProduct;
  const isOutOfStock = stock <= 0;
  const relatedProducts = products ? products.filter((p) => p._id !== selectedProduct._id) : [];

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        {/* Main Product Layout Card */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-slate-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery Column */}
            <div>
              <ProductGallery images={images} productName={name} />
            </div>

            {/* Info Column */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Category & Stock Badges */}
                <div className="flex items-center gap-2">
                  <Badge variant="primary">{category || "General"}</Badge>
                  {isOutOfStock ? (
                    <Badge variant="danger">Out of Stock</Badge>
                  ) : (
                    <Badge variant="success">In Stock</Badge>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline space-x-3 pt-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {formatPrice(price)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Taxes included</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {description}
                </p>

                {/* Quantity Selector */}
                {!isOutOfStock && (
                  <div className="pt-2">
                    <QuantitySelector
                      quantity={quantity}
                      maxStock={stock}
                      onChange={setQuantity}
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isOutOfStock}
                  isLoading={addingToCart}
                  leftIcon={ShoppingCart}
                  onClick={handleAddToCart}
                  className="shadow-xl"
                >
                  {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </Button>

                {/* Value Propositions List */}
                <div className="grid grid-cols-3 gap-2 pt-4 text-center">
                  <div className="flex flex-col items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <Truck size={20} className="text-indigo-600 mb-1" />
                    <span className="text-[11px] font-bold text-slate-800">Fast Shipping</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <ShieldCheck size={20} className="text-indigo-600 mb-1" />
                    <span className="text-[11px] font-bold text-slate-800">Verified Authentic</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <RotateCcw size={20} className="text-indigo-600 mb-1" />
                    <span className="text-[11px] font-bold text-slate-800">30-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Tab Section */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between py-2 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Category</span>
              <span className="font-bold text-slate-800">{category || "General"}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Stock Availability</span>
              <span className="font-bold text-slate-800">{stock} units</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-50">
              <span className="text-slate-500 font-medium">Product ID</span>
              <span className="font-mono text-xs text-slate-600">{selectedProduct._id}</span>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                Related Products in {category}
              </h2>
              <Link
                to={APP_ROUTES.PRODUCTS}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>View All</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((relProduct) => (
                <ProductCard
                  key={relProduct._id}
                  product={relProduct}
                  onAddToCart={() => {
                    navigate(APP_ROUTES.PRODUCT_DETAILS.replace(":id", relProduct._id));
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
