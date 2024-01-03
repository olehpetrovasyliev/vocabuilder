import axios from "axios";

const instanceConfig = {
  baseURL: "https://vocab-builder-backend.p.goit.global/api/",
};

export const instance = axios.create(instanceConfig);

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};
