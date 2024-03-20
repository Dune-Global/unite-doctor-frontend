"use client";

import { PatientList } from "@/types/patients";
import { PatientDoctorHistory } from "@/types/patient-doctor-history";
import { columns } from "./(table)/columns";
import { DataTable } from "./(table)/data-table";
import { useEffect, useState } from "react";
import { getPatientList } from "@/data/mock/patient-list";
import { getAllPatientDoctorHistory } from "@/data/mock/patient-doctor-history";

export default function History() {
  const [data, setData] = useState<PatientDoctorHistory[]>([]);

  useEffect(() => {
    const getAllPatientDoctorActionHandler = async () => {
      const data = await getAllPatientDoctorHistory();
      setData(data);
    };

    getAllPatientDoctorActionHandler();
  }, []);

  return (
    <>
      <div className="mt-8 text-3xl font-medium">
        <h1>Medical History</h1>
      </div>
      <div className="pb-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
