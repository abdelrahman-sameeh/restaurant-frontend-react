import React from "react";
import AdminSidebarComp from "../Admin/AdminSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Row } from "react-bootstrap";
import upload from "../../images/upload.png";

const AddMealContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" اضافة وجبة جديدة "} />

          <form action="">
            <div className="mt-3">
              <label htmlFor="meal-image">
                <img
                  src={upload}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  alt=""
                />
              </label>
              <input
                id="meal-image"
                className="form-control d-none"
                type="file"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="meal-title">اسم الوجبة</label>
              <input id="meal-title" className="form-control" type="text" />
            </div>
            <div className="mt-3">
              <label htmlFor="meal-details">وصف الوجبة</label>
              <input id="meal-details" className="form-control" type="text" />
            </div>

            <div className="mt-3">
              <label htmlFor="meal-sizes">الاحجام المتاحة</label>
              <select id="meal-sizes" className="form-control">
                <option value="small">حجم صغير (Small)</option>
                <option value="medium">حجم متوسط (Medium)</option>
                <option value="large">حجم كبير (Large)</option>
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="meal-category"> اختر تصنيف </label>
              <select id="meal-category" className="form-control">
                <option value=""></option>
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="meal-price">السعر</label>
              <input id="meal-price" className="form-control" type="number" />
            </div>
            
            <button className="btn special-btn mt-2">اضافة</button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default AddMealContainer;
