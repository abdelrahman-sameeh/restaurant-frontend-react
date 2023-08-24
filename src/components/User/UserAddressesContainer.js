import React from "react";
import UserSidebarComp from "./UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Row } from "react-bootstrap";
import AddressComp from "./AddressComp";
import { Link } from "react-router-dom";

const UserAddressesContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"العناوين الشخصية"} />
          <Link to='/user/addAddress' className="btn special-btn">
            اضافة عنوان جديد
          </Link>
          <AddressComp />
          <AddressComp />

        </div>
      </Row>
    </>
  );
};

export default UserAddressesContainer;
