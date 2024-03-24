import { PatientDoctorHistory } from "@/types/patient-doctor-history";

export const getAllPatientDoctorHistory = async (): Promise<
  PatientDoctorHistory[]
> => {
  return [
    {
      id: "728ed52f",
      doctorName: "Dr. John Doe",
      specialty: "Cardiologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "e9a8b7c6",
      doctorName: "Dr. Jane Smith",
      specialty: "Dermatologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "d5f4e3c2",
      doctorName: "Dr. David Johnson",
      specialty: "Gynecologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "1a2b3c4d",
      doctorName: "Dr. Sarah Williams",
      specialty: "Neurologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "5e6f7g8h",
      doctorName: "Dr. Michael Brown",
      specialty: "Oncologist",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
    {
      id: "9i8j7k6l",
      doctorName: "Dr. Olivia Wilson",
      specialty: "Orthopedic",
      email: "john@email.com",
      contactNumber: "0712345678",
    },
  ];
};
