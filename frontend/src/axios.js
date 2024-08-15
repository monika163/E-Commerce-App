import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-app-backend-k2zd.onrender.com"
});

export default instance;
