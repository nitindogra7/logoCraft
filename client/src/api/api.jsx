import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, 
});
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

    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      try {
        const res = await Api.post("/auth/refresh-token");
        const newToken = res.data.accessToken;

        localStorage.setItem("token", newToken);
        originalReq.headers.Authorization = `Bearer ${newToken}`;

        return Api(originalReq);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default Api;

