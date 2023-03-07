import api from "./api";

// store our JWT in LS and set axios headers if we do have a token

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  }
};

export const delAuthToken = () => {
  delete api.defaults.headers.common["x-auth-token"];
  localStorage.removeItem("token");
};
