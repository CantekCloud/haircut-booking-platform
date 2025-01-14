import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});