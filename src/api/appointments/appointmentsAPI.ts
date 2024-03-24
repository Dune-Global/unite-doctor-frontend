import CustomAxios from "@/utils/axiosInstance";
import {
  BACKEND_BASE_URL,
  GET_UPCOMING_APPOINTMENTS_URL,
  UPDATE_APPOINTMENT_STATUS_URL,
} from "../_url/auth/url";

export const getAllAppointments = async () => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GET_UPCOMING_APPOINTMENTS_URL,
    });
    console.log("\n\nresponse from appointmentList", response);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updatePatientAppointmentStatus = async (
  values: string,
  id: string
) => {
  try {
    const response = await CustomAxios({
      method: "PATCH",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_APPOINTMENT_STATUS_URL.replace(":appointmentId", id),
      data: { status: values },
    });
    console.log("response from updatePatientAppointmentStatus", response);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
