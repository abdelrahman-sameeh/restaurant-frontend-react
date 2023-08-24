import React from "react";
import UserSidebarComp from "../User/UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const ProfileContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"الصفحة الشخصية"} />
          <div
            className="user-info  py-3 px-2 rounded d-flex justify-content-between align-items-start"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            <div>
              <div className="name"> عبدالرحمن </div>
              <div className="email"> email@gmail.com </div>
              <div className="phone"> 01003982268 </div>
            </div>
            <Link to="/user/updateUserInfo" className="btn special-btn">
              تعديل
            </Link>
          </div>

          <div className="d-flex mt-3 gap-2">
            <Link to="/user/addAddress" className="btn special-btn">
              اضافة عنوان
            </Link>
            <Link to="/user/addresses" className="btn special-btn">
              العناوين الشخصية
            </Link>
          </div>
        </div>
      </Row>
    </>
  );
};

export default ProfileContainer;
