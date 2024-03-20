"use client";

import { PatientDoctorHistory } from "@/types/patient-doctor-history";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreVertical } from "lucide-react";

export const columns: ColumnDef<PatientDoctorHistory>[] = [
  {
    accessorKey: "doctorName",
    header: "Doctor Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col justify-center lg:flex-row lg:justify-start gap-2 items-center">
          <div>
            <img
              src={`https://ui-avatars.com/api/?name=${row.original.doctorName}`}
              alt="patient"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div>{row.original.doctorName}</div>
        </div>
      );
    },
  },

  {
    accessorKey: "specialty",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Specialty</div>
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
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Email</div>
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
    accessorKey: "contactNumber",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <div>Contact Number</div>
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
];
