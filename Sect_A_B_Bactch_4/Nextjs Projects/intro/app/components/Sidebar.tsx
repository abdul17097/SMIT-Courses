// components/AdminSidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/adminpannel/dashboard",
    icon: "📊",
  },
  {
    name: "Users",
    href: "/adminpannel/users",
    icon: "👥",
  },
  {
    name: "Products",
    href: "/adminpannel/products",
    icon: "📦",
  },
  {
    name: "Orders",
    href: "/adminpannel/orders",
    icon: "🛒",
  },
  {
    name: "Categories",
    href: "/adminpannel/categories",
    icon: "📁",
  },
  {
    name: "Analytics",
    href: "/adminpannel/analytics",
    icon: "📈",
  },
  {
    name: "Settings",
    href: "/adminpannel/settings",
    icon: "⚙️",
  },
  {
    name: "About",
    href: "/about",
    icon: "ℹ️",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className=" z-40 h-screen w-64 border-r bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-0 w-full border-t p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100"
        >
          <span>↩️</span>
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
