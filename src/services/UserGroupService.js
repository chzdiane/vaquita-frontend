import axios from "axios";

const getUserGroups = (user) => {
  return axios.post(`http://localhost:3001/user-group/${user}`);
};

export default { getUserGroups };
