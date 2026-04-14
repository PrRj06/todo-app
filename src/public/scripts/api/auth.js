import { apiRequest } from "./api.js";

export function logoutUser() {
  return apiRequest("/api/auth/logout", { method: "POST" });
}
