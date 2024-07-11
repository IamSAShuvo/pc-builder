import axios from "axios";

const BASEURL = "http://localhost:3005/api/auth/";

async function getUser() {
  return await axios.get(BASEURL + "findById");
}

async function registerUser(values) {
  return await axios.post(BASEURL + "register", values);
}

async function userLogin(values) {
  return await axios.post(BASEURL + "login", values);
}

export { getUser, registerUser, userLogin };
