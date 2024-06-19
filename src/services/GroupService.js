import axios from "axios";

//const API_URL = import.meta.env.VITE_API_URL;

const LOCAL = "http://localhost:3001/groups/"

const getGroups = () => {
  return axios.get(`${LOCAL}`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
};

const getGroupsById = (id) => {
  return axios.get(`${LOCAL}/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
};

const createGroup = (group) => {
  return axios.post(`${LOCAL}`, group, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
}

const deleteGroup = (id) => {
  return axios.delete(`${LOCAL}/${id}`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
};

export default { getGroups, getGroupsById, createGroup, deleteGroup};
