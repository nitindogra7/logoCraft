import Api from "./api";

export const dashboardApi = async () => {
  try {
    const response = await Api.get("/app/dashboard");
    return response.data;
  } catch (error) {
    console.log(error.response?.message || error.message);
  }
};
