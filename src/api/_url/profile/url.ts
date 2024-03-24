export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const UPDATE_DOCTOR_URL = "/doctor/update";
export const UPDATE_PASSWORD_URL = "/doctor/update-password";
export const VERIFY_EMAIL_URL = "/doctor/verify-email";
export const GET_DOCTOR_URL = "/doctor/find-one/";

export const ADD_AVAILABILITY_URL = "/appointment/create-availability";
export const UPDATE_DOCTOR_SCHEDULES_URL = "/appointment/update-availability/:availabilityId";
export const UPDATE_SCHEDULE_STATUS_URL = "/appointment/update-availability-status/:scheduleId";