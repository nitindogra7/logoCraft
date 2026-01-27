import Api from "./api";

export const generateLogoApi = async ({ prompt, style }) => {
  try {
    const res = await Api.post("/app/logo-craft", {
      prompt,
    });

    return res.data;
  } catch (error) {
    console.log(
      error.response?.data?.message || error.message
    );
    throw error;
  }
};
