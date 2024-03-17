"use client"

import { PatientList } from "@/types/patients"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreVertical } from "lucide-react"

export const columns: ColumnDef<PatientList>[] = [
    {
        accessorKey: "patientName",
        header: "Patient Name",
        cell: ({ row }) => {
            return (
                <div className="flex flex-col lg:flex-row justify-start gap-2 items-center">
                    <div>
                        <img src={`https://ui-avatars.com/api/?name=${row.original.patientName}`} alt="patient" className="w-8 h-8 rounded-full" />
                    </div>
                    <div>
                        {row.original.patientName}
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "patientId",
        header: "Patient ID",
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Date
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "gender",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Gender
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "age",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Age
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "disease",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Disease
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "allergies",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Allergies
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Status
                    </div>
                    <button
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="flex items-start"
                    >
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const rowData = row.original

            return (
                <button onClick={() => { console.log(rowData) }} className="flex justify-center items-center">
                    <MoreVertical size={18} />
                </button>
            )
        },
    },
]
