import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Classes from "../styles/AdminSignup.module.css";
import { useState } from "react";
import { registerUser } from "../services/user";

function AdminSignup() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    //do validation
    if (password !== confirmPassword) {
      return setError("Password does not match");
    }

    const user = {
      fullname: fullName,
      username: userName,
      email: email,
      password: password,
    };

    try {
      setError("");
      setLoading(true);
      registerUser(user)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
      alert("Signup success!");

      navigate("/admin");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <div className={Classes.main}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Set username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Agree to Terms & Conditions"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
            required
          />
        </Form.Group>

        <Button disabled={loading} variant="primary" type="submit">
          Submit
        </Button>

        {error && <p className="mt-2 alert alert-warning">{error}</p>}

        <div>
          Already have an account?
          <Link to="/admin"> Login</Link> instead?
        </div>
      </Form>
    </div>
  );
}

export default AdminSignup;
