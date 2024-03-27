"use client";

import { getDoctorPatientDetails } from "@/api/patients/patientsAPI";
import HistoryAccordion from "@/components/patient-details/HistoryAccordion";
import { getPatientHistory } from "@/data/mock/patient-history";
import { IDoctorPatientDetails } from "@/types/doctor-patient-details";
import { PatientHistoryList } from "@/types/patient-history";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [doctorPatientDetails, setDoctorPatientDetails] =
    useState<IDoctorPatientDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const historyData = await getPatientHistory();
  //       setPatientHistory(historyData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching patient history:", error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    const getDoctorPatientDetailsBySessionIdActionHandler = (
      patientSessionId: string
    ) => {
      getDoctorPatientDetails(patientSessionId)
        .then((res) => {
          console.log("\n\n\nDoctor patient details res", res.data);
          setDoctorPatientDetails(res.data);
          console.log("\n\n\nDoctor patient details", doctorPatientDetails);
          // if (res.data) {
          // getDoctorDetailsActionHandler(res.data.doctor);
          // }
          // setIsDoctorPatientLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching doctor patient details", error);
          // setIsDoctorPatientLoading(false);
        });
    };

    // const getDoctorDetailsActionHandler = (doctorId: string) => {
    //   getDoctorById(doctorId)
    //     .then((res) => {
    //       setDoctorDetails(res.data);
    //       console.log("\n\n\nDoctor details", doctorDetails);
    //       // setIsDoctorDetailsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching doctor details", error);
    //       // setIsDoctorDetailsLoading(false);
    //     });
    // };

    if (Array.isArray(params.id)) {
      getDoctorPatientDetailsBySessionIdActionHandler(params.id[0]);
    } else {
      getDoctorPatientDetailsBySessionIdActionHandler(params.id);
    }
  }, []);

  return (
    <div className="my-16">
      {doctorPatientDetails?.prescription &&
      doctorPatientDetails.prescription.length > 0 ? (
        doctorPatientDetails.prescription.map((prescriptionItem, index) => (
          <HistoryAccordion
            key={prescriptionItem._id}
            details={prescriptionItem}
            isLastItem={index === doctorPatientDetails.prescription.length - 1}
          />
        ))
      ) : (
        <p className="text-ugray-200 text-center ">No history available</p>
      )}
    </div>
  );
}
