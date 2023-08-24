import React from "react";

const DeliveryOrderComp = ({ order }) => {
  return (
    <div className="rounded border p-2 start gap-2 flex-wrap w-100">
      <img
        src={order.qrImage}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
        alt=""
      />
      <div className="order-info">
        <div>
          <span className="fw-bold"> كود الطلب: </span>
          {order._id}
        </div>
        <div className="text-capitalize">
          <span className="fw-bold"> عنوان الطلب: </span>
          {order.address.city}
        </div>
        <div>
          <span className="fw-bold"> رقم الهاتف: </span>
          {order.address.phone}
        </div>
      </div>
    </div>
  );
};

export default DeliveryOrderComp;
