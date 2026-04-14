import { apiRequest } from "./api.js";

export function getTasks() {
  return apiRequest("/api/task");
}

export function createTask(payload) {
  return apiRequest("/api/task", {
    method: "POST",
    body: payload
  });
}

export function updateTaskById(id, payload) {
  return apiRequest(`/api/task/${id}`, {
    method: "PUT",
    body: payload
  });
}

export function deleteTaskById(id) {
  return apiRequest(`/api/task/${id}`, {
    method: "DELETE"
  });
}
