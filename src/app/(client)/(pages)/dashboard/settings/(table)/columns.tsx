"use client";

import { AvailableAppointmentsList } from "@/types/available-appointments";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreVertical, PencilIcon, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import {
  updateDoctorSchedules,
  updateScheduleStatus,
} from "@/api/profile/profileAPI";

export const columns: ColumnDef<AvailableAppointmentsList>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Date</div>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-start"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Time</div>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-start"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Duration</div>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-start"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "appointments",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>No of Appointments</div>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-start"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Location</div>
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-start"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const rowData = row.original;

      const handleEditAppointment = async () => {
        try {
          const res = await updateDoctorSchedules();
          if (res.status === 200) {
            toast({
              title: "Availability Updated Successfully",
              description: "You can now view your availability in the calendar",
            });
          } else {
            toast({
              title: "Something went wrong!",
              description: "Please try again later",
            });
          }
        } catch (error) {
          console.log(error);
          toast({
            title: "Failed to update availability",
            description: "Please try again later",
          });
        }
      };

      const handleCancelAppointment = async () => {
        try {
          const res = await updateScheduleStatus({ status: "newStatus" });
          if (res.status === 200) {
            toast({
              title: "Availability Updated Successfully",
              description: "You can now view your availability in the calendar",
            });
          } else {
            toast({
              title: "Something went wrong!",
              description: "Please try again later",
            });
          }
        } catch (error) {
          console.log(error);
          toast({
            title: "Failed to update availability",
            description: "Please try again later",
          });
        }
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical size={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <button className="flex gap-4" onClick={handleEditAppointment}>
                <div>
                  <PencilIcon size={17} />
                </div>
                <div>Edit Appointment</div>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="flex gap-4 text-ured-400"
                onClick={handleCancelAppointment}
              >
                <div>
                  <Trash2 size={17} />
                </div>
                <div>Cancel Appointment</div>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
