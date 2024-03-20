"use client ";

import PatientCard from "@/components/patient-details/PatientCard";
import React from "react";

export default function Page() {
  return (
    <div>
      <PatientCard
        image="https://randomuser.me/api/portraits/men/59.jpg"
        name="Patient Name"
        gender="Female"
        age={40}
        email="patient@example.com"
        contactNumber="+94 72 1089721"
        weight="70 kg"
        height="170 cm"
        bloodType="O+"
        bloodPressure="120/80 mmHg"
        allergies="None"
        hereditaryDiseases="None"
      />
    </div>
  );
}
