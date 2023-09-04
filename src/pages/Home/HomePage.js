import React from "react";
import { Col, Row } from "react-bootstrap";
import NavbarAppComponent from "../../components/Utility/NavbarAppComp";
import ContentComponent from "../../components/Home/ContentComp";
import SidebarComponent from "../../components/Home/SidebarComp";

const HomePage = () => {
  let user;
  if (localStorage.user) {
    user = JSON.parse(localStorage.user);
  }
  return (
    <div className="home">
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <Col >
          <ContentComponent />
        </Col>
        {user && user.role === "user" ? (
          <Col className="sidebar">
            <SidebarComponent />
          </Col>
        ) : (
          ""
        )}
      </Row>
    </div>
  );
};

export default HomePage;
