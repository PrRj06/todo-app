import { apiRequest } from "./api.js";

export function getCurrentUser() {
  return apiRequest("/api/user/me");
}
