import axios from "axios";

export const BASE_URL = "https://rslang-backend-76ch.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});
