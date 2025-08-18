import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="space-y-4">
        <Link to="/admin" className="block hover:text-gray-400">
          Dashboard
        </Link>
        <Link to="/admin/products" className="block hover:text-gray-400">
          Products
        </Link>
        <Link to="/admin/create-product" className="block hover:text-gray-400">
          Create Product
        </Link>
        <Link to="/admin/orders" className="block hover:text-gray-400">
          Orders
        </Link>
      </nav>
    </div>
  );
}
