import React from "react";
import { Button } from "../common/Button";

interface PatientCardProps {
  image: string;
  name: string;
  gender: string;
  age: number;
  email: string;
  contactNumber: string;
  weight: string;
  height: string;
  bloodType: string;
  bloodPressure: string;
  allergies: string;
  hereditaryDiseases: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  image,
  name,
  gender,
  age,
  email,
  contactNumber,
  weight,
  height,
  bloodType,
  bloodPressure,
  allergies,
  hereditaryDiseases,
}) => {
  return (
    <div className="max-w-md mx-auto bg-ugray-0 py-4 shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 mb-2">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src={image}
            alt="Profile"
          />
          <div>
            <div className="font-medium text-xl mb-2">{name}</div>
            <div className="text-sm text-ugray-400 font-medium">
              <span className="mr-2">{gender}</span>
              <span>|</span>
              <span className="ml-2">{age} years</span>
            </div>
          </div>
          <Button variant="default" size="sm">
            View Medical History
          </Button>
        </div>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="px-6 py-4">
        <div className="flex justify-between gap-6 mb-4">
          <div className="w-1/2 pr-2">
            <p className="text-sm flex flex-col gap-2">
              <span className="text-ugray-200">Email</span>
              <span>{email}</span>
            </p>
          </div>

          <div className="w-1/2 pl-2 text-right">
            <p className="text-sm flex flex-col gap-2">
              <span className="text-ugray-200">Contact Number</span>
              <span>{contactNumber}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="px-6 py-4 w-full flex flex-col gap-6 justify-between">
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Weight:</span>
          <span>{weight}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Height:</span>
          <span>{height}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Blood Type:</span>
          <span>{bloodType}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Blood Pressure:</span>
          <span>{bloodPressure}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Allergies:</span>
          <span>{allergies}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Hereditary Diseases:</span>
          <span>{hereditaryDiseases}</span>
        </p>
      </div>
    </div>
  );
};

export default PatientCard;
