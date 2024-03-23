import { jwtDecode } from "jwt-decode";

export const decodedToken = () => {
  return jwtDecode(localStorage.getItem("token"));
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
