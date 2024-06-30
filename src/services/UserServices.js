import axios from "axios";

const login = (user) => {
  return axios.post(`http://localhost:3001/auth/login`, user);
};

const register = (user) => {
  return axios.post(`http://localhost:3001/users`, user);
};

export default { login, register };
