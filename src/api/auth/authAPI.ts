import axios from "axios";
import { BACKEND_BASE_URL, LOGIN_URL, REFRESH_URL } from "@/api/_url/auth/url";
import { handleLoginResponse } from "@/helpers/auth/authHelper";

export const loginAccount = async (values: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: LOGIN_URL,
      data: {
        email: values.email,
        password: values.password,
      },
    });
    handleLoginResponse(response);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const accessToken = async (token: any) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: BACKEND_BASE_URL,
      url: REFRESH_URL,
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};
