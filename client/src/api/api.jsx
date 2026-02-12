import axios from "axios";

const Api = axios.create({
  baseURL: "https://logocraft-3.onrender.com",
  withCredentials: true,
});

let isRefreshing = false;
let refreshPromise = null;

Api.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalReq = error.config;
    if (originalReq?.url?.includes("/auth/refresh-token")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      try {
        if (!isRefreshing) {
          isRefreshing = true;
          refreshPromise = Api.post("/auth/refresh-token");
        }

        const res = await refreshPromise;
        const newToken = res.data.accessToken;

        localStorage.setItem("token", newToken);
        originalReq.headers.Authorization = `Bearer ${newToken}`;

        isRefreshing = false;
        refreshPromise = null;
        return Api(originalReq);
      } catch (err) {
        isRefreshing = false;
        refreshPromise = null;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default Api;
