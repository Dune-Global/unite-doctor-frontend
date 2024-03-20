import axios from "axios";
import {
  BACKEND_BASE_URL,
  DESIGNATION_LIST_URL,
  GENDER_LIST_URL,
  HOSPITAL_LIST_URL,
  UNIVERSITY_LIST_URL,
} from "@/api/_url/enums/url";

export const getDesignationList = async () => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: DESIGNATION_LIST_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getGenderList = async () => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: GENDER_LIST_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getHospitalList = async () => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: HOSPITAL_LIST_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const getUniversityList = async () => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: UNIVERSITY_LIST_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
