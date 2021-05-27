import axios from "axios";

const axiosInstance = () => {
  let headers = {};

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const instance = axios.create({
    baseURL: baseUrl,
    headers
  });
  return instance;
};

export default axiosInstance;
