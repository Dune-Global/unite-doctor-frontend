import { loginAccount } from "@/api/auth/authAPI";

export const loginActionHandler = async (values: any) => {
  return await loginAccount(values);
};
