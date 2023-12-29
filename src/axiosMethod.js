import axios from "axios";

const BASE_URL = "https://gaia-backenddata.netlify.app/.netlify/functions/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
