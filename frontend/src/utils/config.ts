import axios from "axios";

export const newAxios = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});
