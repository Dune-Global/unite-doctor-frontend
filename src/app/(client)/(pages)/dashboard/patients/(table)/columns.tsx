"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreVertical } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { PatientInfo } from "@/types/patients"

export const columns: ColumnDef<PatientInfo>[] = [
    {
        accessorKey: "patientName",
        header: "Patient Name",
        cell: ({ row }) => {
            return (
                <div className="flex flex-col justify-center lg:flex-row lg:justify-start gap-2 items-center">
                    <div>
                        <img src={`${row.original.imgUrl}`} alt="patient" className="w-8 h-8 rounded-full" />
                    </div>
                    <div>
                        {row.original.patientName}
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "email",
        header: "Patient Email",
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
