import React from "react";
import { Col, Row } from "react-bootstrap";
import Pizza from "../../images/Pizza.jpg";
import MenuComponent from "./MenuComp";
import MealContainer from "./MealContainer";

const ContentComponent = () => {
  let user;
  if (localStorage.user) user = JSON.parse(localStorage.user);

  return (
    <div className="mt-4">
      {/* header */}
      <div className="header-app d-flex justify-content-between align-items-center gap-5">
        {user && (
          <div className="name " style={{ width: "fit-content" }}>
            مرحبا {user.name}
          </div>
        )}
        <div className="search flex-1">
          <input
            type="search"
            className="form-control"
            placeholder="ادخل كلمه البحث"
          />
        </div>
      </div>
      {/* banner */}
      <Row
        style={{
          backgroundColor: "var(--revert-light)",
          overflow: "hidden",
          color: "var(--main-color)",
        }}
        className="banner mt-2 p-2 rounded"
      >
        <Col
          className="image col-5"
          style={{ overflow: "hidden", height: "200px" }}
        >
          <img
            className="w-100 h-100 rounded"
            style={{ objectFit: "cover" }}
            src={Pizza}
            alt=""
          />
        </Col>
        <Col className="text col-7">
          <h4>
            قم بانشاء اول طلب بقيمة
            <span style={{ color: "var(--alt-color)" }}> خصم 50%</span>
          </h4>
          <p> متفوتش الفرصة, الحق العرض </p>
          <div className="btn special-btn fw-bold"> اطلب دلوقتى </div>
        </Col>
      </Row>
      {/* menu */}
      <MenuComponent />

      {/* show meals */}
      <MealContainer />
    </div>
  );
};

export default ContentComponent;
