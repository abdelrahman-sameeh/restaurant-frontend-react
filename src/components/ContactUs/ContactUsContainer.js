import React from "react";
import UserSidebarComp from "../User/UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";

const ContactUsContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"تواصل معنا"} />

          <form action="">
            <div className="mb-3">
              <label htmlFor="1" className="form-label">
                العنوان
              </label>
              <input
                type="text"
                className="form-control"
                id="1"
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                الموضوع
              </label>
              <textarea className="form-control" rows={5}></textarea>
            </div>{" "}
            <button className="btn special-btn">
              ارسال
            </button>
          </form>

          

        </div>
      </Row>
    </>
  );
};

export default ContactUsContainer;
