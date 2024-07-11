import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getRam() {
  return await axios.get(BASEURL + "ram");
}

async function postRam(data) {
  return await axios.post(BASEURL + "ram", data, {
    headers: header,
  });
}

async function putRam(id, data) {
  return await axios.put(BASEURL + "ram/" + id, data, {
    headers: header,
  });
}

async function deleteRam(id) {
  return await axios.delete(BASEURL + "ram/" + id, {
    headers: header,
  });
}

export { getRam, postRam, putRam, deleteRam };
