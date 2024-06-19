import axios from "axios";

const login = (user) => {
  return axios.post(`http://localhost:3001/auth/login`, user);
};

export default { login };
