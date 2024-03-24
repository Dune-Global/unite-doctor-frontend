import { BACKEND_BASE_URL, CONNECTED_PATIENTS_URL } from "../_url/auth/url";
import {GET_PATIENT_BY_ID,GET_REPORTS_BY_PATIENT_ID,VIEW_REPORT} from "@/api/_url/patient/url";
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

export const getPatientById = async (id: string) => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${GET_PATIENT_BY_ID}${id}`,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
}

export const getReportsByPatientId = async (id: string) => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${GET_REPORTS_BY_PATIENT_ID}${id}`,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
}

export const viewReport = async (id: string) => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${VIEW_REPORT}${id}`,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
}