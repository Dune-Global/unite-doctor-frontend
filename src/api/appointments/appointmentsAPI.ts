import CustomAxios from "@/utils/axiosInstance";
import {
  BACKEND_BASE_URL,
  GET_UPCOMING_APPOINTMENTS_URL,
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
