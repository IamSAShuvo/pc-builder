import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import Classes from "../styles/Layout.module.css"

function Layout({children}) {
  return (
    <div>
      <NavigationBar />
      <Container className={Classes.container}>{children}</Container>
    </div>
  );
}

export default Layout;
