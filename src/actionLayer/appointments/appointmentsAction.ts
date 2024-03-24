import { getAllAppointments } from "@/api/appointments/appointmentsAPI";
import { addPrescription } from "@/api/appointments/prescriptionAPI";
import { prescriptionObject } from "@/types/appointments";

export const getAllAppointmentsActionHandler = async () => {
  return await getAllAppointments();
};

export const addPrescriptionActionHandler = async (
  data: prescriptionObject,
  patientId: string
) => {
  return await addPrescription(data, patientId);
};
