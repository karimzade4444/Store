import { baseApi } from "./config/apiConfig";

export const login = async (data: { username: string; password: string }) => {
  const myData = await baseApi.post("/Account/login", data);
  return myData;
};
