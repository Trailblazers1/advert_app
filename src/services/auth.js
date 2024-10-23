import { apiClient } from "./config"



export const apiSignup = async(payload) => {
  return await apiClient.post("/users/register", payload)
}

