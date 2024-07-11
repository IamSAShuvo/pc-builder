import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getMotherboard() {
  return await axios.get(BASEURL + "motherboard");
}

async function postMotherboard(data) {
  return await axios.post(BASEURL + "motherboard", data, {
    headers: header,
  });
}

async function putMotherboard(id, data) {
  return await axios.put(BASEURL + "motherboard/" + id, data, {
    headers: header,
  });
}

async function deleteMotherboard(id) {
  return await axios.delete(BASEURL + "motherboard/" + id, {
    headers: header,
  });
}

export { getMotherboard, postMotherboard, putMotherboard, deleteMotherboard };
