import { API_BASE } from "./config";

async function get(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const api = {
  meta: () => get("/api/meta"),
  featured: () => get("/api/featured"),
  cars: (params = {}) => get(`/api/cars${qs(params)}`),
  car: (id) => get(`/api/cars/${id}`),
  parts: (params = {}) => get(`/api/parts${qs(params)}`),
  part: (id) => get(`/api/parts/${id}`),
};

function qs(params) {
  const entries = Object.entries(params).filter(
    ([, v]) => v !== undefined && v !== null && v !== ""
  );
  if (!entries.length) return "";
  return "?" + entries.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
}
