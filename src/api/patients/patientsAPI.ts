import { BACKEND_BASE_URL, CONNECTED_PATIENTS_URL } from "../_url/auth/url";
import CustomAxios from "@/utils/axiosInstance";

export const getConnectedPatients = async () => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: CONNECTED_PATIENTS_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
