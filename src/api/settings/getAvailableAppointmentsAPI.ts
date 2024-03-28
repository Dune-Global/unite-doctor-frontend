import CustomAxios from "@/utils/axiosInstance";
import { BACKEND_BASE_URL } from "../_url/auth/url";
import { GET_DOCTORS_SCHEDULES_URL } from "../_url/profile/url";

export const getAvailableAppointmentsSettings = async (id: string) => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GET_DOCTORS_SCHEDULES_URL.replace(":doctorId", id),
    });
    console.log("Response from settings API:", response);

    return response;
  } catch (error: any) {
    console.log(error);

    return error.response;
  }
};
