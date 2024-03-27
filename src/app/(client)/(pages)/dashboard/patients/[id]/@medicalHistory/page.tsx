"use client";

import { PatientList } from "@/types/patients";
import {
  DoctorDetails,
  PatientDoctorHistory,
} from "@/types/patient-doctor-history";
import { columns } from "./(table)/columns";
import { DataTable } from "./(table)/data-table";
import { use, useEffect, useState } from "react";
import { getPatientList } from "@/data/mock/patient-list";
import { getAllPatientDoctorHistory } from "@/data/mock/patient-doctor-history";
import { useParams } from "next/navigation";
import {
  getDoctorPatientDetails,
  getSharedSessionsWithDoctorsByPatientId,
} from "@/api/patients/patientsAPI";
import { IDoctorPatientDetails } from "@/types/doctor-patient-details";
import { get } from "http";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function History() {
  const params = useParams();
  const [tableData, setTableData] = useState<PatientDoctorHistory[]>([]);
  const [doctorPatientDetails, setDoctorPatientDetails] =
    useState<IDoctorPatientDetails | null>(null);

  const patientId = useSelector(
    (state: RootState) => state.patientDetailState.patientId
  );

  // useEffect(() => {
  //   console.log("\n\n\nPatient ID redux History:", patientId);
  //   const getPatientDetailsActionHandler = (patientId: string) => {
  //     getSharedSessionsWithDoctorsByPatientId(patientId)
  //       .then((res) => {
  //         setTableData(res.data.doctorDetails);
  //         console.log("\n\n\nResponse", res.data);
  //         console.log("\n\n\nPatient details history", tableData);
  //         // setIsDoctorDetailsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching patient details", error);
  //         // setIsDoctorDetailsLoading(false);
  //       });
  //   };
  //   getPatientDetailsActionHandler(patientId);
  // }, []);

  useEffect(() => {
    const fetchDoctorList = async (patientId: string) => {
      try {
        const response = await getSharedSessionsWithDoctorsByPatientId(
          patientId
        );
        const doctorsList: PatientDoctorHistory[] = response.data;

        const transformedData: PatientDoctorHistory[] = doctorsList.map(
          (session) => {
            return {
              sessionId: session.sessionId,
              doctorId: session.doctorId,
              // Accessing and setting doctorDetails to data state
              doctorDetails: {
                id: session.doctorDetails.id,
                doctorName: session.doctorDetails.doctorName,
                speciality: session.doctorDetails.speciality,
                email: session.doctorDetails.email,
                contactNUmber: session.doctorDetails.contactNUmber,
                firstName: session.doctorDetails.firstName,
                lastName: session.doctorDetails.lastName,
                imgUrl: session.doctorDetails.imgUrl,
              },
            };
          }
        );

        const doctorsTableObjects = transformedData.map((session) => ({
          sessionId: session.sessionId,
          doctorId: session.doctorId,
          doctorDetails: session.doctorDetails,
        }));

        setTableData(doctorsTableObjects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctorList(patientId);
  }, []);

  return (
    <>
      <div className="mt-8 text-3xl font-medium">
        <h1>Medical History</h1>
      </div>
      <div className="pb-10">
        <DataTable columns={columns} data={tableData} />
      </div>
    </>
  );
}
