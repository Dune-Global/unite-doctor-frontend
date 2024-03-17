"use client"

import { AppointmentList } from "@/types/appointments";
import { useEffect, useState } from "react";
import { DataTable } from "./(table)/data-table";
import { columns } from "./(table)/columns";
import { getAllAppointments } from "@/data/mock/appointment-list";

export default function Appointments() {
  const [data, setData] = useState<AppointmentList[]>([])

  useEffect(() => {
    const getAllAppointmentsActionHandler = async () => {
      const data = await getAllAppointments();
      setData(data)
    }

    getAllAppointmentsActionHandler()
  }, [])

  return (
    <div className="py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}