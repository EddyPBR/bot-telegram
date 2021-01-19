import axios from "axios";

const PORT = process.env.REACT_APP_PORT;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export default api;
