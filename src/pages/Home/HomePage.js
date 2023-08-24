import React from "react";
import { Col, Row } from "react-bootstrap";
import NavbarAppComponent from "../../components/Utility/NavbarAppComp";
import ContentComponent from "../../components/Home/ContentComp";
import SidebarComponent from "../../components/Home/SidebarComp";
import UserSidebarComp from "../../components/User/UserSidebarComp";

const HomePage = () => {
  return (
    <div className="home">
      
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <Col style={{ backgroundColor: "var(--secondary-color)" }}>
          <ContentComponent />
        </Col>
        <Col className="sidebar">
          <SidebarComponent />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
