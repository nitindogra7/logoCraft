import Api from "./api";

export const signupApi = async (userData) => {
  try {
    const response = await Api.post("/auth/signup", userData);
    const token = await response.data.accessToken;
    console.log(response.data);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
    throw error;
  }
};
