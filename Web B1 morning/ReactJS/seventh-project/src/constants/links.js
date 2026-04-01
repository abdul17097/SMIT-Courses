import { CiSettings } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuMessageCircle } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiSolidFileExport } from "react-icons/bi";
export const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: CiSettings,
  },
  {
    name: "All Report",
    path: "/reports",
    icon: CiSearch,
  },
  {
    name: "Geography",
    path: "/geography",
    icon: AiOutlineGlobal,
  },
  {
    name: "Conversation",
    path: "/conversation",
    icon: LuMessageCircle,
  },
  {
    name: "Deals",
    path: "/deals",
    icon: IoBagCheckOutline,
  },
  {
    name: "Export",
    path: "/exports",
    icon: BiSolidFileExport,
  },
];
