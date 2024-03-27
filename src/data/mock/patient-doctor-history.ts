import { PatientDoctorHistory } from "@/types/patient-doctor-history";

export const getAllPatientDoctorHistory = async (): Promise<any[]> => {
  return [
    {
      id: "728ed52f",
      doctorName: "Dr. John Doe",
      speciality: "Cardiologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "e9a8b7c6",
      doctorName: "Dr. Jane Smith",
      speciality: "Dermatologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "d5f4e3c2",
      doctorName: "Dr. David Johnson",
      speciality: "Gynecologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "1a2b3c4d",
      doctorName: "Dr. Sarah Williams",
      speciality: "Neurologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "5e6f7g8h",
      doctorName: "Dr. Michael Brown",
      speciality: "Oncologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "9i8j7k6l",
      doctorName: "Dr. Olivia Wilson",
      speciality: "Orthopedic",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
  ];
};
