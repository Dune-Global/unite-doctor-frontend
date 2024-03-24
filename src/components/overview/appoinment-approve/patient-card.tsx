"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, ShieldCloseIcon, X } from "lucide-react";
import Link from "next/link";

export default function PatientCard({
  name,
  appoinmentNo,
  imageUrl,
  status,
}: {
  name: string;
  appoinmentNo: string;
  imageUrl: string;
  status?: string;
}) {
  const firstLetter = name.charAt(0).toUpperCase();
  const handleCancel = () => {
    alert("Cancel");
  };

  const handleDone = () => {
    alert("Done");
  };
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row gap-3 items-center w-1/2">
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{firstLetter}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
          <p className="text-xs text-ugray-400">
            Appoinment No: {appoinmentNo}
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        {status === "done" ? (
          <span className="text-xs text-uindigo-600 bg-uindigo-200 px-4 py-2 rounded-md ">
            Done
          </span>
        ) : status === "cancelled" ? (
          <span className="text-xs text-ured-600 bg-[#FDE9E9] px-4 py-2 rounded-md">
            Cancelled
          </span>
        ) : (
          <div className="flex flex-row gap-2">
            <button
              onClick={handleCancel}
              className="rounded-md border border-ured-600 text-ured-600 p-1"
            >
              <X size={18} />
            </button>
            <button
              onClick={handleDone}
              className="rounded-md border border-uindigo-600 text-uindigo-600 p-1"
            >
              <Check size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
