import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_BACKEND_URL ||
    "https://fahriw32qr.us-east-1.awsapprunner.com",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
