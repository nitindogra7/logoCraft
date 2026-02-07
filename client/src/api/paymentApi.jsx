import Api from "./api";

export const createOrderApi = (amount) => {
  return Api.post("/app/create-order", { amount });
};

export const verifyPaymentApi = (data) => {
  return Api.post("/app/verify-payment", data);
};
