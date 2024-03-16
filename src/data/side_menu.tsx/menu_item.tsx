import { ISideMenuItems } from "@/types/sidemenu";
import {
  LogOut,
  CreditCard,
  Home,
  User,
  ShoppingCart,
  RefreshCw,
  Settings,
  MessageCircle,
} from "lucide-react";

export const sideMenuItems: ISideMenuItems[] = [
  {
    id: 1,
    path: "/overview",
    icon: User,
    description: "Overview",
  },
  {
    id: 2,
    path: "/appoinments",
    icon: CreditCard,
    description: "Appoinments",
  },
  {
    id: 3,
    path: "/patients",
    icon: User,
    description: "Patient",
  },
  {
    id: 4,
    path: "/messages",
    icon: MessageCircle,
    description: "Messages",
  },
  {
    id: 5,
    path: "/settings",
    icon: Settings,
    description: "Settings",
  },
];
