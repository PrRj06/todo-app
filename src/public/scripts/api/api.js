export async function apiRequest(url, options = {}) {
  const { method = "GET", body, headers = {} } = options;

  const requestOptions = {
    method,
    credentials: "include",
    headers: { ...headers }
  };

  if (body !== undefined) {
    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, requestOptions);

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message = (data && (data.msg || data.message)) || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}
