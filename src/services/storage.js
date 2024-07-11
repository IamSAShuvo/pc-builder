import axios from "axios";

const BASEURL = "http://localhost:3005/api/";
const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getStorage() {
  return await axios.get(BASEURL + "storage");
}

async function postStorage(data) {
  return await axios.post(BASEURL + "storage", data, {
    headers: header,
  });
}

async function putStorage(id, data) {
  return await axios.put(BASEURL + "storage/" + id, data, {
    headers: header,
  });
}

async function deleteStorage(id) {
  return await axios.delete(BASEURL + "storage/" + id, {
    headers: header,
  });
}

export { getStorage, postStorage, putStorage, deleteStorage };
