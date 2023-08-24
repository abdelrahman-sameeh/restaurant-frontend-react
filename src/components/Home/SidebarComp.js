import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MealOrderComp from "./MealOrderComp";

const SidebarComponent = () => {
  return (
    <div>
      {/* user orders */}
      <div className="mt-4 between ">
        <div className="user-info d-flex gap-1">
          <div
            style={{ width: "30px", height: "30px" }}
            className="rounded-full avatar"
            alt=""
          >
            ا
          </div>
          <div className="username">احمد</div>
        </div>
        <Link
          to="/user/orders"
          data-tooltip='الطلبات'
          className="user-orders fs-5 icon"
          style={{ color: "var(--main-text-color)" }}
        >
          <FontAwesomeIcon icon={faClipboard} />
        </Link>
      </div>

      {/* sub-title */}
      <div className="sub-title mt-4 mb-3 between">
        <h4 className="p-0 m-0"> قائمة الطلبات </h4>
        <Link to="/user/orders" style={{ color: "var(--alt-color)" }}>
          {" "}
          عرض الكل{" "}
        </Link>
      </div>
      {/* orders */}
      <div className="orders d-flex flex-column justify-content-center align-items-center gap-2">
        <MealOrderComp />
        <MealOrderComp />
      </div>

      {/* total price  */}
      <div className="total-price">
        <div className="between my-3">
          <span> السعر الكلى </span>
          <span style={{ color: "var(--price-color)" }}> 60$ </span>
        </div>
        <div className="center">
          <div className="btn special-btn ">اكمل الطلب</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
