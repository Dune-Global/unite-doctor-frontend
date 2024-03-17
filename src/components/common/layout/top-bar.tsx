'use client'; 

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export default function TopBar() {

    const pageName = useSelector((state: RootState) => state.pageState.pageName);

  return (
    <div className="w-full flex flex-row justify-between">
      <div>
        <h1 className="text-3xl font-bold">{pageName}</h1>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col items-start justify-start">
            <h3 className="text-sm font-medium">Wasath Theekshana</h3>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm opacity-70">Physician</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
