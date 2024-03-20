import React from "react";
import { Button } from "../common/Button";

interface DoctorCardProps {
  image: string;
  name: string;
  designation: string;
  gender: string;
  email: string;
  contactNumber: string;
  slmcNumber: string;
  nicNumber: string;
  dateOfBirth: string;
  currentHospital: string;
  currentUniversity: string;
  isPersonalClinic: boolean;
  clinicName: string;
  clinicAddress: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  designation,
  gender,
  email,
  contactNumber,
  slmcNumber,
  nicNumber,
  dateOfBirth,
  currentHospital,
  currentUniversity,
  isPersonalClinic,
  clinicName,
  clinicAddress,
}) => {
  return (
    <div className="max-w-md bg-ugray-0 py-4 px-8 shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 mb-2">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src={image}
            alt="Profile"
          />
          <div className="flex flex-col items-center">
            <div className="font-medium text-xl mb-2">{name}</div>
            <div className="text-sm text-ugray-400 font-medium">
              <span className="mr-2">{designation}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="py-4">
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
      <div className="py-4 w-full flex flex-col gap-6 justify-between">
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Gender:</span>
          <span>{gender}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">SLMC No:</span>
          <span>{slmcNumber}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">NIC No:</span>
          <span>{nicNumber}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Date of Birth:</span>
          <span>{dateOfBirth}</span>
        </p>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="py-4 w-full flex flex-col gap-6 justify-between">
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Current Hospital:</span>
          <span>{currentHospital}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Current University:</span>
          <span>{currentUniversity}</span>
        </p>
      </div>
      <div className="border-t border-ugray-100"></div>
      <div className="py-4 w-full flex flex-col gap-6 justify-between">
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Personal Clinic:</span>
          <span>{isPersonalClinic ? "Yes" : "No"}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Clinic Name:</span>
          <span>{clinicName}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span className="text-ugray-200">Clinic Address:</span>
          <span>{clinicAddress}</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
