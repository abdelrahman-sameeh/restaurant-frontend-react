import React from "react";
import { Row } from "react-bootstrap";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";

const UpdateUserInfoContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"تعديل المعلومات الشخصية"} />

          <form action="">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                الاسم
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                البريد الالكترونى
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                الهاتف
              </label>
              <input type="phone" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                تأكيد كلمه المرور *
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword"
              />
            </div>
          </form>
        </div>
      </Row>
    </>
  );
};

export default UpdateUserInfoContainer;
