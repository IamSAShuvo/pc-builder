import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getMonitor() {
  return await axios.get(BASEURL + "monitor");
}

async function postMonitor(data) {
  return await axios.post(BASEURL + "monitor", data, {
    headers: header,
  });
}

async function putMonitor(id, data) {
  return await axios.put(BASEURL + "monitor/" + id, data, {
    headers: header,
  });
}

async function deleteMonitor(id) {
  return await axios.delete(BASEURL + "monitor/" + id, {
    headers: header,
  });
}

export { getMonitor, postMonitor, putMonitor, deleteMonitor };
