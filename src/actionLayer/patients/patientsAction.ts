import { getConnectedPatients, getPatientById,getReportsByPatientId,viewReport } from "@/api/patients/patientsAPI";

export const getConnectedPatientsActionHandler = async () => {
  return await getConnectedPatients();
};

export const getPatientByIdActionHandler = async (id: string) => {
  return await getPatientById(id);
}

export const getReportsByPatientIdActionHandler = async (id: string) => {
  return await getReportsByPatientId(id);
}

export const viewReportActionHandler = async (id: string) => {
  return await viewReport(id);
}