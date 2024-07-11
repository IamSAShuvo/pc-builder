import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getGPU() {
  return await axios.get(BASEURL + "gpu");
}

async function postGPU(data) {
  return await axios.post(BASEURL + "gpu", data, {
    headers: header,
  });
}

async function putGPU(id, data) {
  return await axios.put(BASEURL + "gpu/" + id, data, {
    headers: header,
  });
}

async function deleteGPU(id) {
  return await axios.delete(BASEURL + "gpu/" + id, {
    headers: header,
  });
}

export { getGPU, postGPU, putGPU, deleteGPU };
