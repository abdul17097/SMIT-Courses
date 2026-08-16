import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Truck, CheckCircle2, Clock, ShieldCheck, Package } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import ErrorState from "../../components/common/ErrorState";
import { formatPrice } from "../../utils/formatters";
import { APP_ROUTES } from "../../constants/appRoutes";
import orderService from "../../services/orderService";

export const OrderDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await orderService.getOrderDetails(id);
        setOrder(res.data);
      } catch (err) {
        setError("Order details not found.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <Container className="py-16 text-center">
        <p className="text-sm font-semibold text-slate-500">Loading order details...</p>
      </Container>
    );
  }

  if (error || !order) {
    return (
      <Container className="py-16">
        <ErrorState
          title="Order Not Found"
          message="We couldn't find the requested order details."
          onRetry={() => navigate(APP_ROUTES.ORDERS)}
        />
      </Container>
    );
  }

  const items = order.items || [];
  const totalAmount = order.total || order.grandTotal || 0;
  const shippingAddress = order.shippingAddress || {};

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Order #{order.orderId || id}
              </h1>
              <Badge variant="success">Paid</Badge>
              <Badge variant="warning">Processing</Badge>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              Placed on {order.date || new Date().toLocaleDateString()}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            leftIcon={ArrowLeft}
            onClick={() => navigate(APP_ROUTES.ORDERS)}
          >
            Back to Orders
          </Button>
        </div>

        {/* Order Status Timeline Bar */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-6">
            Order Progress Status
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <CheckCircle2 size={24} className="text-indigo-600 mb-1" />
              <span className="text-xs font-bold text-slate-900">Order Placed</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Confirmed</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
              <Clock size={24} className="text-amber-600 mb-1" />
              <span className="text-xs font-bold text-slate-900">Processing</span>
              <span className="text-[10px] text-slate-500 mt-0.5">Preparing items</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 opacity-60">
              <Truck size={24} className="text-slate-400 mb-1" />
              <span className="text-xs font-bold text-slate-700">Shipped</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Pending</span>
            </div>

            <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 opacity-60">
              <Package size={24} className="text-slate-400 mb-1" />
              <span className="text-xs font-bold text-slate-700">Delivered</span>
              <span className="text-[10px] text-slate-400 mt-0.5">Pending</span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Ordered Items ({items.length})
              </h3>

              <div className="divide-y divide-slate-100">
                {items.map((item, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-bold shrink-0">
                        <Package size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-500">Qty: {item.quantity} • Unit: {formatPrice(item.price)}</p>
                      </div>
                    </div>

                    <span className="text-sm font-extrabold text-slate-900 shrink-0">
                      {formatPrice(item.subtotal || item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipping & Payment Summary Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Shipping Address Box */}
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 border-b border-slate-100 pb-3">
                <MapPin size={16} className="text-indigo-600" />
                <span>Shipping Information</span>
              </h4>

              <div className="space-y-1 text-xs text-slate-600">
                <p className="font-bold text-slate-800">{shippingAddress.fullName || "Customer"}</p>
                <p>{shippingAddress.address}</p>
                <p>{shippingAddress.city}, {shippingAddress.postalCode}</p>
                <p className="pt-1 text-slate-500">Phone: {shippingAddress.phone}</p>
              </div>
            </div>

            {/* Total Amount Box */}
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-3">
                Payment Summary
              </h4>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Payment Gateway</span>
                  <span className="font-bold text-slate-800">Stripe / Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Status</span>
                  <span className="font-bold text-emerald-600">PAID</span>
                </div>
                <div className="border-t border-slate-100 pt-2 flex justify-between font-extrabold text-sm text-slate-900">
                  <span>Total Amount</span>
                  <span className="text-indigo-600">{formatPrice(totalAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderDetailsPage;
