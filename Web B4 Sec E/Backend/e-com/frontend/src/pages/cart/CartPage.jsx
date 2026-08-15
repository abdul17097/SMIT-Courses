import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import EmptyState from "../../components/common/EmptyState";
import ErrorState from "../../components/common/ErrorState";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import CartSkeleton from "../../components/cart/CartSkeleton";
import { APP_ROUTES } from "../../constants/appRoutes";
import {
  fetchCartAsync,
  addToCartAsync,
  deleteCartItemAsync,
  clearCartAsync,
} from "../../store/slices/cartSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, loading, error } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCartAsync());
    }
  }, [dispatch, isAuthenticated]);

  const handleUpdateQuantity = async (item, newQuantity) => {
    if (item.productId) {
      const diff = newQuantity - item.quantity;
      if (diff !== 0) {
        const result = await dispatch(
          addToCartAsync({ productId: item.productId, requestedQuantity: diff })
        );
        if (addToCartAsync.fulfilled.match(result)) {
          toast.success("Cart quantity updated.");
        } else {
          toast.error(result.payload || "Failed to update quantity.");
        }
      }
    } else {
      toast.info("Updating local cart quantity.");
    }
  };

  const handleDeleteItem = async (item) => {
    if (item.productId) {
      const result = await dispatch(deleteCartItemAsync(item.productId));
      if (deleteCartItemAsync.fulfilled.match(result)) {
        toast.success("Item removed from cart.");
      } else {
        toast.error(result.payload || "Could not remove item.");
      }
    } else {
      toast.success("Item removed.");
    }
  };

  const handleClearCart = async () => {
    const result = await dispatch(clearCartAsync());
    if (clearCartAsync.fulfilled.match(result)) {
      toast.success("Cart cleared.");
    } else {
      toast.error(result.payload || "Failed to clear cart.");
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.info("Please log in to proceed to checkout.");
      navigate(APP_ROUTES.LOGIN);
      return;
    }
    navigate(APP_ROUTES.CHECKOUT);
  };

  if (!isAuthenticated) {
    return (
      <Container className="py-16">
        <EmptyState
          icon={ShoppingBag}
          title="Your Cart is Waiting"
          description="Please sign in to view your saved cart items or start shopping."
          actionLabel="Sign In Now"
          onAction={() => navigate(APP_ROUTES.LOGIN)}
        />
      </Container>
    );
  }

  if (loading && items.length === 0) {
    return <CartSkeleton />;
  }

  if (error && items.length === 0) {
    return (
      <Container className="py-16">
        <ErrorState
          title="Unable to load Cart"
          message={error}
          onRetry={() => dispatch(fetchCartAsync())}
        />
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="py-16">
        <EmptyState
          icon={ShoppingBag}
          title="Your Cart is Empty"
          description="You haven't added any products to your cart yet. Explore our product catalog!"
          actionLabel="Browse Products"
          onAction={() => navigate(APP_ROUTES.PRODUCTS)}
        />
      </Container>
    );
  }

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Review items before proceeding to secure checkout.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              leftIcon={ArrowLeft}
              onClick={() => navigate(APP_ROUTES.PRODUCTS)}
            >
              Continue Shopping
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={Trash2}
              onClick={handleClearCart}
              className="text-rose-600 hover:bg-rose-50"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Column */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <CartItem
                key={item.productId || index}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <CartSummary items={items} onCheckout={handleCheckout} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
