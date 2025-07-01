// components/Sidebar.tsx
import { Home, FilePlus, Tag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const navItems = [
  { name: "Dashboard", icon: <Home size={18} />, href: "/dashboard" },
  { name: "Create Post", icon: <FilePlus size={18} />, href: "/create-post" },
  { name: "Create Tag", icon: <Tag size={18} />, href: "/create-tag" },
  { name: "All Users", icon: <Users size={18} />, href: "/all-users" },
  { name: "All Post", icon: <Users size={18} />, href: "/all-post" },
  { name: "BookMarks", icon: <FaBookmark size={18} />, href: "/bookmarks" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 border-r p-4">
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link to={item.href} key={item.name}>
            <Button
              variant="ghost"
              className="justify-start w-full gap-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              {item.icon}
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
