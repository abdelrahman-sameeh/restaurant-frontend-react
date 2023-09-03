import React from "react";
import Pizza from "../../images/pizza-png-15.png";

const OrderItemComm = ({ item, meal }) => {
  return (
    <div className="order-item d-flex gap-3 my-2 pb-2">
      <img
        src={meal.image || Pizza}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
        alt=""
      />
      <div className="meal-info">
        <div className="title fw-bold"> {meal.title} </div>
        <div
          className="details"
          style={{ fontSize: "16px", color: "var(--main-text-50)" }}
        >
          {" "}
          {meal.details}{" "}
        </div>

        <div>
          <span className="fw-bold"> العدد : </span>
          <span style={{ color: "var(--main-text-50)" }}> {item.count} </span>
        </div>

        <div>
          <span className="fw-bold"> الحجم : </span>
          <span style={{ color: "var(--main-text-50)" }}> {item.size} </span>
        </div>

        <div>
          <span className="fw-bold"> السعر : </span>
          <span style={{ color: "var(--price-color)" }} className="fw-bold">
            {" "}
            {meal.price} EGY{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderItemComm;
