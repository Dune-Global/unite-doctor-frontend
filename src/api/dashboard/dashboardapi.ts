import CustomAxios from "@/utils/axiosInstance";
import { BACKEND_BASE_URL } from "../_url/auth/url";

export const getDashboardData = async () => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: "/patient-doc/dashboard-data",
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
