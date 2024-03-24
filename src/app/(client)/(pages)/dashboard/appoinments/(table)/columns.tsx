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
import Prescription from "@/components/appointments/modals/Prescription"
import { updatePatientAppointmentStatusActionHandler } from "@/actionLayer/appointments/appointmentsAction"
import { toast } from "@/components/ui/use-toast"

const StatusCell = ({ row }: any) => {
    const rowData = row.original
    const [status, setStatus] = useState(rowData.status)

    const onCompletedClick = async () => {
        setStatus("Completed")
        console.log(rowData.id)

        try {
            const res = await updatePatientAppointmentStatusActionHandler("Done", rowData.id)

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
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Please try again later.",
            });
        }
    }

    const onPendingClick = async () => {
        setStatus("Pending")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 p-0">
                    <StatusLabel status={status} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-4 py-4 items-center border">
                <DropdownMenuItem className="cursor-pointer" onClick={onCompletedClick} >
                    <StatusLabel status="Completed" />
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={onPendingClick} >
                    <StatusLabel status="Pending" />
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
            const rowData = row.original
            return (
                <div className="flex flex-col lg:flex-row justify-start gap-2 items-center w-full">
                    <div>
                        <img src={`${rowData.imgUrl}`} alt="patient" className="w-8 h-8 rounded-full" />
                    </div>
                    <div>
                        <Prescription cellContent={rowData.patientName} rowData={rowData} />
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "appointmentId",
        header: "Appointment ID",
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <Prescription cellContent={rowData.appointmentId} rowData={rowData} />
            )
        }
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
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <Prescription cellContent={rowData.gender} rowData={rowData} />
            )
        }
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
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <Prescription cellContent={rowData.age} rowData={rowData} />
            )
        }
    },
    {
        accessorKey: "location",
        header: ({ column }) => {
            return (
                <div className="flex items-center">
                    <div>
                        Location
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
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <Prescription cellContent={rowData.location} rowData={rowData} />
            )
        }
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
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <Prescription cellContent={rowData.date} rowData={rowData} />
            )
        }
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
        cell: ({ row }) => {
            const rowData = row.original
            return (
                <Prescription cellContent={rowData.time} rowData={rowData} />
            )
        }
    },
    {
        id: "actions",
        accessorKey: "status",
        header: "Status",
        cell: StatusCell
    },
]