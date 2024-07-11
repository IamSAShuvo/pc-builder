import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../styles/Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import {DropdownButton, Dropdown} from "react-bootstrap";

function Home() {

  const navigate = useNavigate()

  
  return (
    <div className={Classes.home}>
      <div className={Classes.main_buttons}>
        <DropdownButton
          className="mx-2"
          id="dropdown-basic-button"
          title="Auto Build Scenario"
        >
          <Dropdown.Item
            onClick={() => {
              navigate("/autobuild", {
                state: {
                  value: "basic",
                  placeholder: "Enter Your Budget"
                }
              })
            }}
          >
            Basic Build
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/autobuild", {
                state: {
                  value: "developer",
                  placeholder: "Enter Your Budget"
                }
              });
            }}
          >
            Developer Build
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/autobuild", {
                state: {
                  value: "creator",
                  placeholder: "Recommended Starting Budget is 65000"
                }
              });
            }}
          >
            Creators Build
          </Dropdown.Item>
        </DropdownButton>
        <Link to="/manualbuild">
          <Button variant="secondary">Manual Build</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
