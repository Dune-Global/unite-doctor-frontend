import { BACKEND_BASE_URL, CONNECTED_PATIENTS_URL } from "../_url/auth/url";
import {
  GET_DOCTOR_PATIENT_DETAILS_URL,
  GET_PATIENT_BY_ID,
  GET_REPORTS_BY_PATIENT_ID,
  GET_SHARED_SESSIONS_WITH_DOCTORS_URL,
  VIEW_REPORT,
} from "@/api/_url/patient/url";
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

/**
 * Get Doctor Patient Details
 */

export const getDoctorPatientDetails = async (patientSessionId: string) => {
  console.log(
    "**************Get Doctor Patient Details request API***************"
  );
  return await CustomAxios({
    method: "GET",
    baseURL: BACKEND_BASE_URL,
    url: GET_DOCTOR_PATIENT_DETAILS_URL.replace(
      ":patientSessionId",
      patientSessionId
    ),
  });
};

/*
 *  Get shared sessions with doctors
 */

export const getSharedSessionsWithDoctorsByPatientId = async (id: string) => {
  console.log(
    "**************Get Shared Sessions with Doctors request API***************"
  );
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: `${GET_SHARED_SESSIONS_WITH_DOCTORS_URL}${id}`,
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