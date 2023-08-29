import React from "react";
import { Col, Row } from "react-bootstrap";
import CurrentLocation from "../../components/Utility/CurrentLocation";
import NavbarAppComponent from "../../components/Utility/NavbarAppComp";
import GetLoggedUserCartHook from "../../CustomHook/Cart/GetLoggedUserCartHook";
import MealCartComp from "../../components/Cart/MealCartComp";

const CartPage = () => {
  const [cartItems, total, totalAfterDiscount] = GetLoggedUserCartHook();


  return (
    <div className="mt-3">
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <div className="row-app ">
        <div className="container">
          <CurrentLocation current={"السلة"} />
          <Row className="gap-3">
            {/* add to orders */}
            <Col lg="12" md="12" sm="12" className="p-0">
              <div
                className="px-3 py-3 rounded"
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
                {total ? (
                  <div className="start gap-2 fw-bold mb-2">
                    <span>السعر الكلى</span>
                    <span style={{ color: "var(--price-color)" }}>{total}</span>
                  </div>
                ) : (
                  ""
                )}
                {totalAfterDiscount ? (
                  <div className="start gap-2 fw-bold mb-2">
                    <span>السعر بعد الخصم</span>
                    <span style={{ color: "var(--price-color)" }}>49$</span>
                  </div>
                ) : (
                  ""
                )}

                <button
                  style={{ padding: "4px 7px", fontSize: "16px" }}
                  className="btn special-btn"
                >
                  طلب الان
                </button>
              </div>
            </Col>
            {/* meals */}
            <Col lg="12" md="12" sm="12" className="p-0">
              <div className="start flex-wrap gap-2 align-stretch">
                {cartItems && cartItems.length
                  ? cartItems.map((item) => (
                      <MealCartComp key={item._id} item={item} meal={item.product} />
                    ))
                  : ""}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
