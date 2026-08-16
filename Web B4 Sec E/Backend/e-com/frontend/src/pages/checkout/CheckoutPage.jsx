import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CreditCard,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  MapPin,
  User,
  Phone,
  Building,
  Mail,
} from "lucide-react";
import { toast } from "react-toastify";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Badge from "../../components/common/Badge";
import EmptyState from "../../components/common/EmptyState";
import { formatPrice } from "../../utils/formatters";
import { APP_ROUTES } from "../../constants/appRoutes";
import { fetchCartAsync, clearCartAsync } from "../../store/slices/cartSlice";
import paymentService from "../../services/paymentService";

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [addressForm, setAddressForm] = useState({
    fullName: user?.username || "",
    email: user?.email || "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("stripe"); // 'stripe' | 'cod'
  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!addressForm.fullName.trim()) errors.fullName = "Full name is required";
    if (!addressForm.email.trim()) errors.email = "Email address is required";
    if (!addressForm.address.trim()) errors.address = "Shipping address is required";
    if (!addressForm.city.trim()) errors.city = "City is required";
    if (!addressForm.postalCode.trim()) errors.postalCode = "Postal code is required";
    if (!addressForm.phone.trim()) errors.phone = "Phone number is required";
    return errors;
  };

  const subtotal = items.reduce((sum, item) => sum + (item.subtotal || (item.price * item.quantity)), 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 10;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error("Please fill in all required shipping fields.");
      return;
    }

    try {
      setIsProcessing(true);

      if (paymentMethod === "stripe") {
        const response = await paymentService.createCheckoutSession();
        if (response.id) {
          toast.info("Redirecting to Stripe Secure Payment Gateway...");
          window.location.href = response.id;
          return;
        }
      }

      // Demo / COD payment flow
      const mockOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      await dispatch(clearCartAsync());

      setOrderSuccess({
        orderId: mockOrderId,
        total: grandTotal,
        shippingAddress: addressForm,
        items,
        date: new Date().toLocaleDateString(),
      });

      toast.success("Order placed successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Failed to process payment.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="py-12 bg-slate-50/50 min-h-screen">
        <Container>
          <div className="max-w-2xl mx-auto rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-slate-100 text-center space-y-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto shadow-sm">
              <CheckCircle2 size={48} />
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Order Confirmed!
            </h1>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Thank you for shopping with AuraStore. Your order has been placed successfully.
            </p>

            <div className="rounded-2xl bg-slate-50 p-6 text-left border border-slate-100 space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-700 pb-3 border-b border-slate-200">
                <span>Order Reference: #{orderSuccess.orderId}</span>
                <span>Date: {orderSuccess.date}</span>
              </div>

              <div className="space-y-1 text-xs text-slate-600">
                <p className="font-semibold text-slate-800">Shipping To:</p>
                <p>{orderSuccess.shippingAddress.fullName}</p>
                <p>{orderSuccess.shippingAddress.address}, {orderSuccess.shippingAddress.city}</p>
                <p>Phone: {orderSuccess.shippingAddress.phone}</p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-between font-extrabold text-sm text-slate-900">
                <span>Total Paid:</span>
                <span className="text-indigo-600">{formatPrice(orderSuccess.total)}</span>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg" onClick={() => navigate(APP_ROUTES.HOME)}>
                Return to Home
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="py-16">
        <EmptyState
          title="Your Cart is Empty"
          description="Add items to your cart before proceeding to checkout."
          actionLabel="Explore Products"
          onAction={() => navigate(APP_ROUTES.PRODUCTS)}
        />
      </Container>
    );
  }

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Checkout
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Complete your shipping address and select payment method.
          </p>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Details Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Form Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
                <MapPin size={22} className="text-indigo-600" />
                <span>Shipping Address</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  name="fullName"
                  placeholder="e.g. John Doe"
                  value={addressForm.fullName}
                  onChange={handleInputChange}
                  leftIcon={User}
                  error={formErrors.fullName}
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={addressForm.email}
                  onChange={handleInputChange}
                  leftIcon={Mail}
                  error={formErrors.email}
                />
              </div>

              <Input
                label="Street Address"
                name="address"
                placeholder="123 Main St, Suite 4B"
                value={addressForm.address}
                onChange={handleInputChange}
                leftIcon={MapPin}
                error={formErrors.address}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input
                  label="City"
                  name="city"
                  placeholder="New York"
                  value={addressForm.city}
                  onChange={handleInputChange}
                  leftIcon={Building}
                  error={formErrors.city}
                />
                <Input
                  label="Postal Code"
                  name="postalCode"
                  placeholder="10001"
                  value={addressForm.postalCode}
                  onChange={handleInputChange}
                  error={formErrors.postalCode}
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={addressForm.phone}
                  onChange={handleInputChange}
                  leftIcon={Phone}
                  error={formErrors.phone}
                />
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
                <CreditCard size={22} className="text-indigo-600" />
                <span>Payment Method</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("stripe")}
                  className={`flex flex-col p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    paymentMethod === "stripe"
                      ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900">Stripe Online Payment</span>
                    <Badge variant="primary" size="sm">Recommended</Badge>
                  </div>
                  <p className="text-xs text-slate-500">
                    Secure instant payment via Credit/Debit Card or Stripe Gateway.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex flex-col p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    paymentMethod === "cod"
                      ? "border-indigo-600 bg-indigo-50/50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900">Cash / Demo Order</span>
                    <Badge variant="outline" size="sm">Instant</Badge>
                  </div>
                  <p className="text-xs text-slate-500">
                    Pay on delivery or simulate order completion.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6 sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Order Review ({items.length} Items)
              </h3>

              {/* Items Breakdown */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div className="flex-1 pr-2">
                      <p className="font-bold text-slate-800 truncate">{item.name}</p>
                      <p className="text-slate-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-slate-900 shrink-0">
                      {formatPrice(item.subtotal || item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing Totals */}
              <div className="border-t border-slate-100 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-bold text-slate-900">
                    {shipping === 0 ? <span className="text-emerald-600 uppercase">Free</span> : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-slate-900">{formatPrice(tax)}</span>
                </div>
                <div className="border-t border-slate-100 pt-3 flex justify-between text-base font-extrabold text-slate-900">
                  <span>Total Amount</span>
                  <span className="text-indigo-600">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isProcessing}
                rightIcon={ArrowRight}
                className="shadow-xl"
              >
                {paymentMethod === "stripe" ? "Pay with Stripe" : "Place Order Now"}
              </Button>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400">
                <Lock size={14} className="text-indigo-500" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CheckoutPage;
