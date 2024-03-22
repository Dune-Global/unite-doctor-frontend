import axios from "axios";
import {
  BACKEND_BASE_URL,
  ADD_AVAILABILITY_URL,
  UPDATE_DOCTOR_URL,
  UPDATE_PASSWORD_URL,
  VERIFY_EMAIL_URL,
  UPDATE_DOCTOR_SCHEDULES_URL,
  UPDATE_SCHEDULE_STATUS_URL,
} from "@/api/_url/profile/url";
import { handleLoginResponse } from "@/helpers/auth/authHelper";
import CustomAxios from "@/utils/axiosInstance";

export const updatePatient = async (values: {
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  mobile: string;
  slmcNumber: string;
  nicNumber: string;
  currentHospital: string;
  currentUniversity: string;
  personalClinic: string;
  clinicName: string;
  clinicAddress: string;
}) => {
  try {
    const response = await CustomAxios({
      method: "PUT",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_DOCTOR_URL,
      data: values,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updatePassword = async (values: {
  oldPassword: string;
  newPassword: string;
}) => {
  try {
    const response = await CustomAxios({
      method: "PATCH",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_PASSWORD_URL,
      data: {
        oldPassword: values.oldPassword,
        newPassowrd: values.newPassword,
      },
    });
    handleLoginResponse(response);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const verifyEmail = async () => {
  try {
    const response = await CustomAxios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: VERIFY_EMAIL_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const addAvailability = async (values: {
  date: string;
  startTime: string;
  sessionDuration: number;
  numberOfAppointments: number;
  location: string;
}) => {
  try {
    const response = await CustomAxios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: ADD_AVAILABILITY_URL,
      data: {
        date: values.date,
        startTime: values.startTime,
        sessionDuration: values.sessionDuration,
        numberOfAppointments: values.numberOfAppointments,
        location: values.location,
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updateDoctorSchedules = async () => {
  try {
    const response = await axios({
      method: "PATCH",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_DOCTOR_SCHEDULES_URL,
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const updateScheduleStatus = async (values: {
  status: string;
}) => {
  try {
    const response = await CustomAxios({
      method: "PATCH",
      baseURL: BACKEND_BASE_URL,
      url: UPDATE_SCHEDULE_STATUS_URL,
      data: {
        status: values.status,
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};