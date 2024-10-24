import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return await apiClient.post("/users/register", payload);
};

export const apiSignin = async (payload) => {
  return await apiClient.post("/users/login", payload);
};
export const apiGetProfile = async () => {
  return await apiClient.post("/users/me");
};

export const apiForgotPassword = async (payload) => {
  return await apiClient.post("/users/login", payload);
};
export const apiAvatarIcon = async (payload) => {
  return await apiClient.post("/users/me", payload);
};
