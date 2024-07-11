import React from "react";
import Classes from "../styles/NavigationBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Account from "./Account";
import Dropdown from "react-dropdown";
import "../styles/dropdown.css"

function NavigationBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  function choosen(value) {
    if (value === "Basic Build") {
      navigate("/autobuild", {
        state: {
          value: "basic",
          placeholder: "Enter Your Budget",
        },
      });
    } else if (value === "Developer Build") {
       navigate("/autobuild", {
         state: {
           value: "developer",
           placeholder: "Enter Your Budget",
         },
       });
    }
    else if(value === "Creators Build") {
       navigate("/autobuild", {
         state: {
           value: "creator",
           placeholder: "Recommended Starting Budget is 65000",
         },
       });
    }
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`fixed-top ${Classes.header}`}
    >
      <Navbar.Brand style={{ fontWeight: "bold", padding: "5px" }}>
        {token ? (
          <Link
            to="/admin-home"
            style={{ textDecoration: "none", color: "black" }}
          >
            PC-BUILDER
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            PC-BUILDER
          </Link>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Dropdown
            options={["Basic Build", "Developer Build", "Creators Build"]}
            onChange={({ value }) => {
              choosen(value);
            }}
            placeholder="Auto Build Scenarios"
          />
          <Link to="/manualbuild" className={Classes.link}>
            <div className={Classes.title}>Manual-Build</div>
            <div className={Classes.bar}></div>
          </Link>

          <Account />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
