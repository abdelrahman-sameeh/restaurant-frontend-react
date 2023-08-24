import React from "react";
import UserSidebarComp from "./UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Link } from "react-router-dom";

const UserAddAddressContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <div className="row-app">
        <div className="container">
          <CurrentLocation current={"اضافة عنوان جديد"} />
          <Link to="/user/addresses" className="btn special-btn mb-2">
            العناوين الشخصيه
          </Link>
          <form action="">
            <div className="mt-3">
              <label> العنوان </label>
              <input type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> المدينة </label>
              <input type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> التفاصيل </label>
              <input type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> رقم الهاتف </label>
              <input type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> الرقم البريدى </label>
              <input type="text" className="form-control mt-الرقم البريدى" />
            </div>
            <button className="btn special-btn mt-3 mb-2">
              اضافة عنوان جديد
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserAddAddressContainer;
