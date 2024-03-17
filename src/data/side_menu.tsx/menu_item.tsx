import { ISideMenuItems } from "@/types/sidemenu";
import {
  User,
  Settings,
  LayoutGridIcon,
  Calendar,
  MessageSquareMore
} from "lucide-react";

export const sideMenuItems: ISideMenuItems[] = [
  {
    id: 1,
    path: "/overview",
    icon: LayoutGridIcon,
    description: "Overview",
  },
  {
    id: 2,
    path: "/appoinments",
    icon: Calendar,
    description: "Appoinments",
  },
  {
    id: 3,
    path: "/patients",
    icon: User,
    description: "Patients",
  },
  {
    id: 4,
    path: "/messages",
    icon: MessageSquareMore,
    description: "Messages",
  },
  {
    id: 5,
    path: "/settings",
    icon: Settings,
    description: "Settings",
  },
];
