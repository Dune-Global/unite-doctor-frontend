import axios from "axios";
import { BACKEND_BASE_URL, LOGIN_URL } from "@/api/_url/url";
import { handleLoginResponse } from "@/helpers/auth/authHelper";

export const loginAccount = async (values: any) => {
  try {
    const response = await axios({
      method: "POST",
      baseURL: BACKEND_BASE_URL,
      url: LOGIN_URL,
      data: values,
    });
    handleLoginResponse(response);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
