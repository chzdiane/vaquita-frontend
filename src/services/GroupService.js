import axios from "axios";

const getGroups = () => {
  return axios.get("http://localhost:3001/groups", {headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzE2NTY2MDI2fQ.PUM6zBCKbPrDqmjvQRtNBSQyUdhT8pWP7g-detSlz18`}});
};

const getGroupsById = (id) => {
  return axios.get(`http://localhost:3001/groups/${id}`, {headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzE2NTY2MDI2fQ.PUM6zBCKbPrDqmjvQRtNBSQyUdhT8pWP7g-detSlz18`}});
};

const createGroup = (group) => {
  return axios.post("http://localhost:3001/groups", group, {headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzE2NTY2MDI2fQ.PUM6zBCKbPrDqmjvQRtNBSQyUdhT8pWP7g-detSlz18`}});
}

const deleteGroup = (id) => {
  return axios.delete(`http://localhost:3001/groups/${id}`, {headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzE2NTY2MDI2fQ.PUM6zBCKbPrDqmjvQRtNBSQyUdhT8pWP7g-detSlz18`}});
};

export default { getGroups, getGroupsById, createGroup, deleteGroup};
