import React from "react";
import OrderItemComp from "./OrderItemComp";

const OrderComp = () => {
  let user;
  if (localStorage.user) user = JSON.parse(localStorage.user);

  return (
    <div className="border rounded px-2 pt-2 my-2 pb-3">
      {user &&
      (user.role === "admin" || 0) /* order status === new or pending */ ? (
        <div className="controls between">
          <span className="fw-bold"> طلب رقم 15 </span>
          <div className="d-flex gap-1">
            <div className="fw-bold btn special-btn">حذف</div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* order items */}
      <OrderItemComp />
      <OrderItemComp />


      <div style={{fontSize: '16px'}}>
        <span className="fw-bold"> حالة التوصيل: </span>
        <span> {"لم يتم التوصيل"} </span>
      </div>
      <div style={{fontSize: '16px'}}>
        <span className="fw-bold"> حالة الدفع: </span>
        <span> {"لم يتم الدفع"} </span>
      </div>

      {/* order status */}
      {user && user.role === "admin" && (
        <div className="start gap-2 mt-2 flex-wrap">
          {/* user delivery */}
          <span className="center">
            <label
              htmlFor="user-delivery"
              style={{
                fontSize: "var(--main-fs)",
                width: "140px",
                display: "inline-block",
              }}
            >
              {" "}
              الدليفرى{" "}
            </label>
            <select
              id="delivery-status"
              defaultValue={"0"}
              className="form-control"
            >
              <option value="0"> اختر الدليفرى </option>
              <option value="1"> احمد </option>
              <option value=""> سيد </option>
              <option value=""> بيبو </option>
              <option value=""> زيزو </option>
            </select>
          </span>
          {/* delivery status */}
          <span className="center">
            <label
              htmlFor="delivery-status"
              style={{
                fontSize: "var(--main-fs)",
                width: "140px",
                display: "inline-block",
              }}
            >
              {" "}
              حاله التوصيل{" "}
            </label>
            <select id="delivery-status" className="form-control">
              <option value="pending"> يتم التحضير </option>
              <option value="onDeliver"> تم الشحن </option>
              <option value=""> تم التوصيل </option>
              <option value=""> لم يتم التوصيل </option>
            </select>
          </span>
          <span className="center">
            <label
              htmlFor="delivery-status"
              style={{ fontSize: "var(--main-fs)", width: "140px" }}
            >
              {" "}
              حاله الدفع{" "}
            </label>
            <select
              id="delivery-status"
              defaultValue={"notPaid"}
              className="form-control"
            >
              <option value="paid"> تم الدفع </option>
              <option value="notPaid"> لم يتم الدفع </option>
            </select>
          </span>
        </div>
      )}
    </div>
  );
};

export default OrderComp;
