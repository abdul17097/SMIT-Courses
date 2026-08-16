import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingBag,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  CheckCircle,
  Package,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import Breadcrumb from "../../components/layout/Breadcrumb";
import ErrorState from "../../components/common/ErrorState";
import ProductCard from "../../components/products/ProductCard";
import ProductGallery from "../../components/products/ProductGallery";
import QuantitySelector from "../../components/products/QuantitySelector";
import ProductDetailsSkeleton from "../../components/products/ProductDetailsSkeleton";
import { formatPrice } from "../../utils/formatters";
import { APP_ROUTES } from "../../constants/appRoutes";
import {
  fetchProductDetailsAsync,
  fetchProductsAsync,
} from "../../store/slices/productSlice";
import { addToCartAsync } from "../../store/slices/cartSlice";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct, products, loading, error } = useSelector(
    (state) => state.product
  );
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
      const result = await dispatch(
        addToCartAsync({ productId: selectedProduct._id, requestedQuantity: quantity })
      );
      if (addToCartAsync.fulfilled.match(result)) {
        toast.success(`${selectedProduct.name} added to cart!`);
      } else {
        toast.error(result.payload || "Failed to add item to cart.");
      }
    } catch (err) {
      toast.error("Failed to add item to cart.");
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
          message={error || "The requested product does not exist or was removed."}
          onRetry={() => navigate(APP_ROUTES.PRODUCTS)}
        />
      </Container>
    );
  }

  const {
    name,
    description,
    price,
    category,
    images = [],
    stock = 0,
    seller,
  } = selectedProduct;

  const isOutOfStock = stock <= 0;
  const relatedProducts = products.filter((p) => p._id !== id).slice(0, 3);

  const breadcrumbItems = [
    { label: "Products", href: APP_ROUTES.PRODUCTS },
    { label: category || "General", href: `${APP_ROUTES.PRODUCTS}?category=${category}` },
    { label: name },
  ];

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen space-y-12">
      <Container>
        <Breadcrumb items={breadcrumbItems} />

        {/* Product Details Section */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Gallery */}
          <ProductGallery images={images} productName={name} />

          {/* Product Information */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge variant="primary">{category || "General"}</Badge>
                {isOutOfStock ? (
                  <Badge variant="danger">Out of Stock</Badge>
                ) : (
                  <Badge variant="success">In Stock ({stock} units)</Badge>
                )}
              </div>

              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {name}
              </h1>

              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span>(4.9 / 5.0 rating)</span>
                <span>•</span>
                <span>Seller: {seller?.username || "Verified Merchant"}</span>
              </div>
            </div>

            {/* Price Banner */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Price</span>
                <span className="text-3xl font-extrabold text-slate-900">
                  {formatPrice(price)}
                </span>
              </div>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-full">
                Free Shipping
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-800">Product Description</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>

            {/* Quantity Controls */}
            {!isOutOfStock && (
              <div className="space-y-2 pt-2">
                <h3 className="text-sm font-bold text-slate-800">Select Quantity</h3>
                <QuantitySelector
                  quantity={quantity}
                  maxStock={stock}
                  onChange={(newQty) => setQuantity(newQty)}
                />
              </div>
            )}

            {/* Add to Cart Actions */}
            <div className="flex items-center space-x-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                disabled={isOutOfStock}
                isLoading={addingToCart}
                onClick={handleAddToCart}
                leftIcon={ShoppingCart}
                className="shadow-xl"
              >
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
              </Button>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 text-center text-xs">
              <div className="flex flex-col items-center space-y-1">
                <Truck size={20} className="text-indigo-600" />
                <span className="font-semibold text-slate-700">Express Delivery</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <ShieldCheck size={20} className="text-emerald-600" />
                <span className="font-semibold text-slate-700">Authentic Product</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <RotateCcw size={20} className="text-sky-600" />
                <span className="font-semibold text-slate-700">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6 border-t border-slate-200 pt-12">
            <h3 className="text-2xl font-bold text-slate-900">
              Related Products in {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
