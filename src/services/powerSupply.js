import axios from "axios";

const BASEURL = "http://localhost:3005/api/";

const token = localStorage.getItem("token");

const header = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

async function getPower() {
  return await axios.get(BASEURL + "powersupply");
}

async function postPower(data) {
  return await axios.post(BASEURL + "powersupply", data, {
    headers: header,
  });
}

async function putPower(id, data) {
  return await axios.put(BASEURL + "powersupply/" + id, data, {
    headers: header,
  });
}

async function deletePower(id) {
  return await axios.delete(BASEURL + "powersupply/" + id, {
    headers: header,
  });
}

export { getPower, postPower, putPower, deletePower };
