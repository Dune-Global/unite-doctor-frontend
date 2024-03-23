import { getConnectedPatients } from "@/api/patients/patientsAPI";

export const getConnectedPatientsActionHandler = async () => {
  return await getConnectedPatients();
};
