import axios from "axios";

const baseURL = "http://localhost:8000/api/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
