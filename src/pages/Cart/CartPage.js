import React from "react";
import { Col, Row } from "react-bootstrap";
import CurrentLocation from "../../components/Utility/CurrentLocation";
import NavbarAppComponent from "../../components/Utility/NavbarAppComp";
import MealComponent from "../../components/Home/MealComp";
import UserSidebarComp from "../../components/User/UserSidebarComp";

const CartPage = () => {
  return (
    <div className="mt-3">
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <div className="row-app ">
        <div className="container">
          <CurrentLocation current={"السلة"} />
          <Row>
            {/* add to orders */}
            <Col lg="4" md="4" sm="12" className="p-0">
              <div
                className="px-3 py-2 rounded"
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <div className="d-flex mb-2 gap-2">
                  <input
                    className="form-control"
                    style={{ fontSize: "14px" }}
                    type="text"
                    placeholder="ادخل كود الخصم"
                  />
                  <button
                    style={{ padding: "0px 7px", fontSize: "16px" }}
                    className="btn special-btn"
                  >
                    {" "}
                    تطبيق{" "}
                  </button>
                </div>

                <div className="between fw-bold mb-2">
                  <span>السعر الكلى</span>
                  <span style={{ color: "var(--price-color)" }}>50$</span>
                </div>
                <div className="between fw-bold mb-2">
                  <span>السعر بعد الخصم</span>
                  <span style={{ color: "var(--price-color)" }}>49$</span>
                </div>

                <button
                  style={{ padding: "4px 7px", fontSize: "16px" }}
                  className="btn special-btn"
                >
                  طلب الان
                </button>
              </div>
            </Col>
            {/* meals */}
            <Col lg="8" md="8" sm="12" className="p-0">
              <div className="center flex-wrap gap-2">
                <MealComponent />
                <MealComponent />
                <MealComponent />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
