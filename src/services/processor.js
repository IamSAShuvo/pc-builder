import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getProcessors() {
  return await axios.get(BASEURL + "processor");
}

async function postProcessor(data) {
  return await axios.post(BASEURL + "processor", data, {
    headers: header,
  });
}

async function putProcessor(id, data) {
  return await axios.put(BASEURL + "processor/" + id, data, {
    headers: header,
  });
}

async function deleteProcessor(id) {
  return await axios.delete(BASEURL + "processor/" + id, {
    headers: header,
  });
}

export { getProcessors, postProcessor, putProcessor, deleteProcessor };
