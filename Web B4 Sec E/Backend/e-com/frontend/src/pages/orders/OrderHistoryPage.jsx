import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PackageCheck, ChevronRight, ShoppingBag, Clock, Truck, CheckCircle } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";
import EmptyState from "../../components/common/EmptyState";
import { formatPrice } from "../../utils/formatters";
import { APP_ROUTES } from "../../constants/appRoutes";
import orderService from "../../services/orderService";

export const OrderHistoryPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await orderService.getOrders();
        setOrders(res.data || []);
      } catch (err) {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusBadge = (status = "Processing") => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <Badge variant="success">Delivered</Badge>;
      case "shipped":
        return <Badge variant="primary">Shipped</Badge>;
      case "cancelled":
        return <Badge variant="danger">Cancelled</Badge>;
      default:
        return <Badge variant="warning">Processing</Badge>;
    }
  };

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Order History
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track and view details of your past and active orders.
          </p>
        </div>

        {orders.length === 0 ? (
          <EmptyState
            icon={PackageCheck}
            title="No Orders Found"
            description="You haven't placed any orders yet. Start exploring our product catalog!"
            actionLabel="Start Shopping"
            onAction={() => navigate(APP_ROUTES.PRODUCTS)}
          />
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => {
              const orderId = order.orderId || order._id || `ORD-${idx + 1000}`;
              const items = order.items || [];
              const totalAmount = order.total || order.grandTotal || 0;
              const status = order.status || "Processing";
              const date = order.date || new Date().toLocaleDateString();

              return (
                <div
                  key={orderId}
                  className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-indigo-100 transition-all"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-base font-extrabold text-slate-900">
                        Order #{orderId}
                      </span>
                      {getStatusBadge(status)}
                      <Badge variant="success" size="sm">Paid</Badge>
                    </div>

                    <p className="text-xs text-slate-500">
                      Placed on {date} • {items.length} {items.length === 1 ? "item" : "items"}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {items.slice(0, 3).map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="inline-flex items-center text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                        >
                          {item.name} x{item.quantity}
                        </span>
                      ))}
                      {items.length > 3 && (
                        <span className="text-[11px] font-semibold text-slate-400 self-center">
                          +{items.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block font-medium">Total Amount</span>
                      <span className="text-lg font-extrabold text-slate-900">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>

                    <Link to={APP_ROUTES.ORDER_DETAILS.replace(":id", orderId)}>
                      <Button variant="outline" size="sm" rightIcon={ChevronRight}>
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default OrderHistoryPage;
