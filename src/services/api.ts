import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.Happy_url}`,
});

console.log(process.env.Happy_url)

export default api;
