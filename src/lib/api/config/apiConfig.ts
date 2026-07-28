import axios from "axios";
import Cookies from "js-cookie";

const baseURL = (import.meta.env.VITE_API_URL || "") + "/api";

export const baseApi = axios.create({
  baseURL,
});

 baseApi.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
