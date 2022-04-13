import axios from "axios";

const createAPI = (baseURL = "https://graphql.anilist.co", config = {}) => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
    crossDomain: true,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...config,
  });

  // setup axios.intercept
  return axiosInstance;
};

const api = createAPI();

export default api;
