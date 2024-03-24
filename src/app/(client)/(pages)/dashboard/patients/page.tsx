"use client"

import { PatientData, PatientInfo } from "@/types/patients"
import { columns } from "./(table)/columns"
import { DataTable } from "./(table)/data-table"
import { useEffect, useState } from "react"
import { getConnectedPatientsActionHandler } from "@/actionLayer/patients/patientsAction"
import { calculateAge } from "@/helpers/calculateAge"


export default function Patient() {
  const [data, setData] = useState<PatientInfo[]>([])

  useEffect(() => {
    const fetchPatientList = async () => {
      try {
        const response = await getConnectedPatientsActionHandler()
        const patientsList: PatientData[] = response.data

        const transformedData: PatientData[] = patientsList.map(item => {
          return {
            sessionId: item.sessionId,
            patient: {
              _id: item.patient._id,
              firstName: item.patient.firstName,
              lastName: item.patient.lastName,
              email: item.patient.email,
              dateOfBirth: item.patient.dateOfBirth,
              gender: item.patient.gender,
              imgUrl: item.patient.imgUrl,
              password: item.patient.password,
              allergies: item.patient.allergies,
              isEmailVerified: item.patient.isEmailVerified,
              createdAt: item.patient.createdAt,
              updatedAt: item.patient.updatedAt,
              __v: item.patient.__v,
            },
            status: item.status
          };
        });

        const patientTableObjects = transformedData.map(item => ({
          sessionId: item.sessionId,
          patientName: `${item.patient.firstName} ${item.patient.lastName}`,
          email: item.patient.email,
          gender: item.patient.gender,
          age: calculateAge(item.patient.dateOfBirth),
          allergies: item.patient.allergies ?? "N/A",
          imgUrl: item.patient.imgUrl
        }));

        setData(patientTableObjects)

      } catch (error) {
        console.log(error)
      }
    }

    fetchPatientList()
  }, [])


  return (
    <>
      <div className="text-3xl font-medium">
        <h1>Patient List</h1>
      </div>
      <div className="pb-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
