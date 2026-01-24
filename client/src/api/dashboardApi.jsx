import Api from "./api";

export const dashboardApi = async () => {
  try {
    const token = await localStorage.getItem("token");
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await Api.get("/app/dashboard");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response?.message || error.message);
  }
};
