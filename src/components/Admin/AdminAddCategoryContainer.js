import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import AdminSidebarComp from "./AdminSidebarComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import  upload  from "../../images/upload.png";

const AdminAddCategoryContainer = () => {
  return (
    <div>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"اضافة تصنيف جديد"} />

          <form action="">
            <div className="mt-3">
              <label htmlFor="category-image">
                <img src={upload} style={{width: '70px', height:'70px', objectFit: 'cover', cursor: 'pointer'}} alt="" />
              </label>
              <input id='category-image' className="form-control d-none" type="file" />
            </div>
            <div className="mt-3">
              <label htmlFor="category-name">
                اسم التصنيف
              </label>
              <input id='category-name' className="form-control"   type="text" />
            </div>
            <button className="btn special-btn mt-2">
              اضافة
            </button>
          </form>
        </div>
      </Row>
    </div>
  );
};

export default AdminAddCategoryContainer;
