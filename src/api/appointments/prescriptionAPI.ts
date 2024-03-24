import { prescriptionObject } from "@/types/appointments";
import CustomAxios from "@/utils/axiosInstance";
import { ADD_PRESCRIPTION_URL, BACKEND_BASE_URL } from "../_url/auth/url";

export const addPrescription = async (
  values: prescriptionObject,
  patientId: string
) => {
  try {
    const response = await CustomAxios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: ADD_PRESCRIPTION_URL.replace(":patientId", patientId),
      data: values,
    });

    console.log("\n\nresponse from addPrescription", response);

    return response;
  } catch (error: any) {
    return error.response;
  }
};
