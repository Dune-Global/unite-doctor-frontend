"use client"

import { AppointmentList } from "@/types/appointments"
import { ColumnDef } from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import StatusLabel from "@/components/labels/status-label"
import { useState } from "react"

const StatusCell = ({ row }: any) => {
    const rowData = row.original
    const [status, setStatus] = useState(rowData.status)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 p-0">
                    <StatusLabel status={status} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-4 py-4 items-center">
                <DropdownMenuItem className="cursor-pointer" onClick={() => { setStatus("Completed") }} >
                    <StatusLabel status="Completed" />
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => { setStatus("Ongoing") }} >
                    <StatusLabel status="Ongoing" />
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => { setStatus("Waiting") }} >
                    <StatusLabel status="Waiting" />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export const columns: ColumnDef<AppointmentList>[] = [
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
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Email
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
        accessorKey: "time",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Time
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
        accessorKey: "status",
        header: "Status",
        cell: StatusCell
    },
]