"use client";

import { Button } from "@/components/ui/button";

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
import { useDispatch, useSelector } from "react-redux";

import { usePathname } from "next/navigation";
import Link from "next/link";

import React, { useState } from "react";
import { sideMenuItems } from "@/data/side_menu.tsx/menu_item";
import Image from "next/image";
import Container from "../container";
import { setPageName } from "@/store/reducers/page-reducer";
type Props = {};

const SideMenu = (props: Props) => {
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handlePageName = () => {
    dispatch(setPageName(pathName));
  };


  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* <div className="w-full relative lg:hidden">
          <button
            className="flex flex-col absolute right-0 top-10 items-center justify-center z-20 lg:hidden"
            onClick={handleClick}
          >
            <span
              className={`bg-ugray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-ugray-900 block h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-ugray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
          {isOpen && (
            <div className="fixed flex flex-col py-10 border-2 bg-gray-0 shadow-lg rounded-lg items-center justify-center top-0 left-0 right-0 z-10">
              <div className="flex flex-col gap-9 py-3">
                {sideMenuItems.map((item) => (
                  <div key={item.id}>
                    <Link
                      href={item.path}
                      className={`flex gap-2 items-center p-1  ${
                        pathName === item.path &&
                        "bg-ugray-900 text-ugray-50 border rounded-md p- "
                      }`}
                    >
                      <item.icon size={22} strokeWidth={2} className=" " />
                      <h2>{item.description}</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div> */}
      <Container>
        <div className="flex flex-row justify-between md:hidden mt-4">
          <div>
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={100}
              height={100}
              quality={10}
              className="pl-3"
            />
          </div>
          <div className="flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
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
      </Container>
      <div className="hidden h-screen lg:flex flex-col border-2 border-ugray-50 rounded-lg md:w-full sm:max-w-full pt-4 p-2">
        <div>
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={100}
            height={100}
            quality={10}
            className="pl-3"
          />
        </div>
        <div className="flex flex-col mt-7">
          {sideMenuItems.map((item) => (
            <Link onClick={handlePageName} key={item.id} href={item.path} className="py-[1px]">
              <div
                className={`p-4 flex items-center gap-3      ${
                  pathName === item.path &&
                  "bg-ugray-900 text-ugray-50 border rounded-xl "
                }`}
              >
                <item.icon size={22} strokeWidth={2} className="  " />
                <h2 className="  ">{item.description}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
