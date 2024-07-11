/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Classes from "../styles/AdminLogin.module.css";
import { useState } from "react";
import { userLogin } from "../services/user";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = localStorage.getItem("user")

  let navigate = useNavigate();
  async function login(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    try {
      userLogin(user)
        .then((res) => {
          console.log(res.data);
          console.log(res.data.user.username);
          if (res.data.success) {
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("user", res.data.user.username);
            alert("Login Success!");
            navigate("/admin-home")

          } else {
            alert("login failed");
          }
        })
        .catch((error) => console.log(error));

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={Classes.main}>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <div>
          Don't have an account? <Link to="/admin-signup"> Signup </Link>{" "}
          instead.
        </div>
      </Form>
    </div>
  );
}

export default AdminLogin;
