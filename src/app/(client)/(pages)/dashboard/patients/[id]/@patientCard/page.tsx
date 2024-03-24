"use client";

import PatientCard from "@/components/patient-details/PatientCard";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const { isAuth, designation, email, firstName, lastName, imageUrl } =
    useSelector((state: RootState) => state.auth);

  return (
    <div>
      <PatientCard
        image="https://randomuser.me/api/portraits/men/59.jpg"
        name="Dilantha Wijesinghe"
        gender="Male"
        age={24}
        email="wdilantha66@gmail.com"
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
