import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MealOrderComp from "./MealOrderComp";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const SidebarComponent = () => {
  return (
    <div>
      {/* user orders */}
      <div className="mt-4 between ">
        <div className="user-info d-flex gap-1">
          <div
            style={{ width: "30px", height: "30px" }}
            className="rounded-full avatar text-capitalize fw-bold"
            alt=""
          >
            {user.name[0]}
          </div>
          <div className="username text-capitalize fw-bold">{user.name} </div>
        </div>
      </div>

      {/* sub-title */}

      {user && user.role === "user" ? (
        <>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SidebarComponent;
