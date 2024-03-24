"use client";
import { getPatientByIdActionHandler } from "@/actionLayer/patients/patientsAction";
import PatientCard from "@/components/patient-details/PatientCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  interface Patient {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    imgUrl?: string;
    password: string;
    isEmailVerified?: boolean;
    mobile?: number;
    height?: number;
    weight?: number;
    bloodGroup?: string;
    allergies?: string;
    hereditaryDiseases?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface Params {
    id: string;
  }

  const params = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (typeof params.id === "string") {
      getPatientByIdActionHandler(params.id).then((res: any) => {
        setPatient(res.data);
      });
    }
  }, []);

  return (
    <div>
      {patient && (
        <PatientCard
          image={
            patient.imgUrl ||
            "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
          }
          name={`${patient.firstName} ${patient.lastName}`}
          gender={patient.gender}
          age={
            new Date().getFullYear() -
            new Date(patient.dateOfBirth).getFullYear()
          } // add extra parentheses
          email={patient.email}
          weight={`${patient.weight || "N/A"} kg`}
          contactNumber={patient.mobile?.toString() || "N/A"}
          height={`${patient.height || "N/A"} cm`}
          bloodType={patient.bloodGroup || "N/A"}
          allergies={patient.allergies || "None"}
          hereditaryDiseases={patient.hereditaryDiseases || "None"}
        />
      )}
    </div>
  );
}
