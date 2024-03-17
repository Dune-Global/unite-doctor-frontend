"use client"

import { PatientList } from "@/types/patients"
import { columns } from "./(table)/columns"
import { DataTable } from "./(table)/data-table"
import { useEffect, useState } from "react"
import { getPatientList } from "@/data/mock/patient-list"


export default function Patient() {
  const [data, setData] = useState<PatientList[]>([])

  useEffect(() => {
    const getPatientListActionHandler = async () => {
      const data = await getPatientList();
      setData(data)
    }

    getPatientListActionHandler()
  }, [])

  return (
    <div className="py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
