import { getAllAppointments } from "@/api/appointments/appointmentsAPI";

export const getAllAppointmentsActionHandler = async () => {
  return await getAllAppointments();
};
