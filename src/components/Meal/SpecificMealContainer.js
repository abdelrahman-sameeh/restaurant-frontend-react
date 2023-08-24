import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import pizzaImg from "../../images/pizza-png-15.png";
import favOn from "../../images/fav-on.png";
import favOff from "../../images/fav-off.png";
import { Link } from "react-router-dom";

const SpecificMealContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" وجبة محددة "} />

          <div className="specific-meal" >
            <div
              className="meal d-flex box start rounded p-2 gap-2 flex-wrap"
              style={{ backgroundColor: "var(--main-color)"}}
            >
              <div className="image"
                style={{ width: '200px' }}
              >
                <img
                className='w-100 h-100'
                style={{objectFit: 'cover'}}
                  src={pizzaImg}
                  alt=""
                />
              </div>
              <div className="meal-info flex-1" >
                <div className="between">
                  <div className="meal-title text-capitalize fw-bold fs-5">
                    Pizza with cheese
                  </div>
                  <div className="controls d-flex gap-1">
                    <div className="btn special-btn"> حذف </div>
                    <Link to='/meal/update' className="btn special-btn"> تعديل </Link>
                  </div>
                </div>

                <div
                  style={{
                    color: "var(--main-text-50)",
                    fontSize: "var(--main-fs )",
                  }}
                >
                  هذا وصف الوجبة هذا وصف الوجبةهذا وصف الوجبةهذا وصف الوجبةهذا
                  وصف الوجبةهذا وصف الوجبةهذا وصف الوجبة
                </div>

                <div className="between my-2">
                  <div
                    style={{ color: "var(--price-color)" }}
                    className="price"
                  >
                    30$
                  </div>
                  <div className="fav">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      src={favOn}
                      alt=""
                    />
                    <img
                      style={{
                        width: "31px",
                        height: "34px",
                        cursor: "pointer",
                      }}
                      src={favOff}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="meal-sizes">اختر الحجم</label>
                  <select id="meal-sizes" className="form-control">
                    <option value="small">حجم صغير (Small)</option>
                    <option value="medium">حجم متوسط (Medium)</option>
                    <option value="large">حجم كبير (Large)</option>
                  </select>
                </div>

                <div className="between gap-1 algin-items-start">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="الكميه"
                  />
                  <button className="btn special-btn ">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default SpecificMealContainer;
