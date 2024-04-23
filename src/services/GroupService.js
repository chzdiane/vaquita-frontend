import axios from "axios";

const getGroups = () => {
  return axios.get("http://localhost:3001/groups");
};

const getGroupsById = (id) => {
  return axios.get(`http://localhost:3001/groups/${id}`);
};

export default { getGroups, getGroupsById };
