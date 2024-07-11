import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from "../styles/Account.module.css";

function Account() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const navigate = useNavigate()

  return (
    <div className={classes.account}>
      {token && (
        <>
          <span>[{user}]</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={() => {
              localStorage.clear();
              navigate("/admin");
            }}
          >
            {" "}
            logout{" "}
          </span>
        </>
      )}
    </div>
  );
}

export default Account;