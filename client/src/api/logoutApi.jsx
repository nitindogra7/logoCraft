import Api from "./api";
export const logoutApi = async () => {
  return await Api.post("/auth/logout");
};
