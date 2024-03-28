"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { updateDashboardAppointmentActionHandler } from "@/actionLayer/appointments/appointmentsAction";
import { toast } from "@/components/ui/use-toast";

export default function PatientCard({
  name,
  appoinmentNo,
  imageUrl,
  status,
  id,
}: {
  name: string;
  appoinmentNo: string;
  imageUrl: string;
  status?: string;
  id?: string;
}) {
  const [isDonePressed, setIsDonePressed] = useState(false);
  const [isCancelPressed, setIsCancelPressed] = useState(false);

  const firstLetter = name.charAt(0).toUpperCase();

  const handleCancel = async () => {
    try {
      setIsCancelPressed(true);

      const res = await updateDashboardAppointmentActionHandler("Cancelled by doctor", id!);
      console.log("response from updateDashboardAppointmentActionHandler", res)

      if (res.status === 200) {
        toast({
          variant: "default",
          title: "Success!",
          description: "Status changed successfully",
        });
      }
      if (res.status === 400) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please try again later.",
        });
      }

      if (res.status === 401) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please try again later.",
        });
      }

      window.location.reload()

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please try again later."
      });
      console.log(error)
    }
  };

  const handleDone = async () => {
    try {
      setIsDonePressed(true);

      const res = await updateDashboardAppointmentActionHandler("Done", id!);
      console.log("response from updateDashboardAppointmentActionHandler", res)

      if (res.status === 200) {
        toast({
          variant: "default",
          title: "Success!",
          description: "Status changed successfully",
        });
      }
      if (res.status === 400) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please try again later.",
        });
      }

      if (res.status === 401) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please try again later.",
        });
      }

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
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
        {status === "done" || isDonePressed ? (
          <span className="text-xs text-uindigo-600 bg-uindigo-200 px-4 py-2 rounded-md ">
            Done
          </span>
        ) : status === "cancelled" || isCancelPressed ? (
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
