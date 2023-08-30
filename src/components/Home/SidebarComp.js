import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import MealOrderComp from "./MealOrderComp";
import GetLoggedUserCartHook from "../../CustomHook/Cart/GetLoggedUserCartHook";
import MealCartComp from "../Cart/MealCartComp";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const SidebarComponent = () => {
  const [cartItems, total, totalAfterDiscount] = GetLoggedUserCartHook();

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
            <h5 className="p-0 m-0 "> قائمة الطلبات </h5>
            <Link
              to="/user/orders"
              style={{
                color: "var(--alt-color)",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {" "}
              عرض الكل{" "}
            </Link>
          </div>

          {cartItems &&   cartItems.length ? (
            <>
              {/* cart */}
              <div className="orders d-flex flex-column justify-content-center align-items-center gap-2">
                <MealCartComp
                  meal={cartItems[cartItems.length - 1].product}
                  item={cartItems[cartItems.length - 1]}
                  classes={"flex-wrap justify-content-center "}
                />
              </div>

              {/* total price  */}
              <div className="total-price">
                <div className="between mt-2 ">
                  {total && !totalAfterDiscount ? (
                    <div className="start gap-2 fw-bold ">
                      <span>السعر الكلى</span>
                      <span style={{ color: "var(--price-color)" }}>
                        {total} EGY{" "}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {totalAfterDiscount ? (
                    <div className="d-flex flex-column">
                      <div className="start gap-2 fw-bold ">
                        <span>السعر قبل الخصم</span>
                        <span style={{ textDecoration: "line-through" }}>
                          <span style={{ color: "var(--price-color)" }}>
                            {total} EGY{" "}
                          </span>
                        </span>
                      </div>
                      <div className="start gap-2 fw-bold mb-2">
                        <span>السعر بعد الخصم</span>
                        <span style={{ color: "var(--price-color)" }}>
                          {" "}
                          {totalAfterDiscount} EGY{" "}
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                  <Link to='/user/cart' className="btn special-btn w-100 my-1 fs-6" > 
                    جميع الوجبات فى السلة 
                  </Link>
                <div className="center">
                  <Link to="/user/cart" className="btn special-btn w-100 fs-6">
                    {" "}
                    اكمل الطلب{" "}
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="center">
              <Link to="/menu" className="btn special-btn w-100 fs-6">
                {" "}
                الوجبات المتاحة{" "}
              </Link>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SidebarComponent;
