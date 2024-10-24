import { apiClient } from "./config"

export const apiGetAdverts = () => {
  return apiClient.get("/adverts?limit=0");
};
export const apiVendorsAdvert= () => {
  return apiClient.get("/users/me/adverts?limit=0");
};


// export const apiPostAdvert = () => apiClient.post("/todos", FormData)

// export default apiPostAdvert

