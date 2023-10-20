export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "http://192.168.56.101:8000";

export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://192.168.56.101:80";
