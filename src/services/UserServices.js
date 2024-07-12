import axios from "axios";

const login = (user) => {
  return axios.post(`http://localhost:3001/auth/login`, user);
};

const register = (user) => {
  return axios.post(`http://localhost:3001/users`, user);
};

const getAll = () => {
  return axios.get(`http://localhost:3001/users`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
};

export default { login, register, getAll};
