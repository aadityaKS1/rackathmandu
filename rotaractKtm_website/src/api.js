import axios from "axios"

const API = axios.create({
  baseURL: "https://rac-backend-kjcu.onrender.com/api/",
});

export default API;