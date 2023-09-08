import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.BASE_URL
});

baseURL.interceptors.request.use(
  (config) => {
    console.log('Entered to interceptor');

    const state = localStorage.getItem("persist:root");

    if (state) {
      const { token } = JSON.parse(state);

      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log('Error in interceptor');
    return Promise.reject(error);
  }
);

export default baseURL;
