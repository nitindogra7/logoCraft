import axios from "axios";

const Api = axios.create({
  baseURL: "https://logocraft.onrender.com",
  withCredentials: true,
});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url?.includes("/auth/refresh-token")) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const { data } = await Api.post("/auth/refresh-token");
        localStorage.setItem("token", data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return Api(originalRequest);
      } catch {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default Api;
