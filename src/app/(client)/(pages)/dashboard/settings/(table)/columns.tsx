"use client"

import { toast } from "@/components/ui/use-toast"
import { AvailableAppointmentsList } from "@/types/available-appointments"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreVertical } from "lucide-react"

export const columns: ColumnDef<AvailableAppointmentsList>[] = [
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
        accessorKey: "duration",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Duration
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
        accessorKey: "appointments",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        No of Appointments
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
                <button onClick={() => {
                    toast({
                        title: "This row contains",
                        description: (
                            <pre className="mt-2 w-[340px] rounded-md bg-ublue-900 p-4">
                                <code className="text-ugray-0">{JSON.stringify(rowData, null, 2)}</code>
                            </pre>
                        ),
                    })
                }} className="flex justify-center items-center">
                    <MoreVertical size={18} />
                </button>
            )
        },
    },
]
