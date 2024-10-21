import { apiClient } from "./config"

export const apiGetAdverts = () => {
  return apiClient.get("/adverts");
};


// export const apiPostAdvert = () => apiClient.post("/todos", FormData)

// export default apiPostAdvert

