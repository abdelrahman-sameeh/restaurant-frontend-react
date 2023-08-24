import React from "react";
import Pizza from "../../images/pizza-png-15.png";

const OrderItemComm = ({ order }) => {
  return (
    <div className="order-item d-flex gap-3 my-2 pb-2">
      <img
        src={Pizza}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
        alt=""
      />
      <div className="meal-info">
        <div className="title"> بيتزا </div>
        <div className="details">بيتزا طوب الطوب</div>

        <div>
          <label htmlFor="count"> العدد : </label>
          <span id='count' className="fw-bold"> 2 </span>
        </div>

        <div >
          <label htmlFor="price"> السعر : </label>
          <span id="price"  style={{color: 'var(--price-color)'}} className="fw-bold"> 180$ </span>
        </div>

      </div>
    </div>
  );
};

export default OrderItemComm;
