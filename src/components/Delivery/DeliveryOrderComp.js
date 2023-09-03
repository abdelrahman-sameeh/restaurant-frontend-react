import React from "react";
import DeliveryOrderHook from "../../CustomHook/Delivery/DeliveryOrderHook";
import Loading from "../Utility/Loading";

const orderStatus = {
  preparing: "يتم تحضيره",
  inDeliver: "فى حالة التوصيل",
  delivered: "تم التوصيل",
};

const DeliveryOrderComp = ({ id, order }) => {
  const [
    loading,
    isPress,
    isPaid,
    isDelivered,
    handleChangePaid,
    handleChangeDelivered,
  ] = DeliveryOrderHook(id, order);

  return (
    <div className="rounded border p-2 center gap-3 flex-wrap w-100 mb-2">
      {loading && isPress && <Loading />}

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
          <span className="fw-bold"> الاسم: </span>
          {order.user.name}
        </div>
        <div className="text-capitalize">
          <span className="fw-bold"> عنوان الطلب: </span>
          {order.address.city}
        </div>
        <div>
          <span className="fw-bold"> رقم الهاتف: </span>
          {order.address.phone}
        </div>

        <div>
          <span className="fw-bold"> حالة الطلب: </span>
          {orderStatus[order.orderStatus]} الان
        </div>
      </div>

      <div className="controls">
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
          <select
            id="delivery-status"
            className="form-control"
            value={isDelivered}
            onChange={handleChangeDelivered}
          >
            <option value={false}> لم يتم التوصيل </option>
            <option value={true}> تم التوصيل </option>
          </select>
        </span>
        <span className="center mt-2">
          <label
            htmlFor="paid-status"
            style={{ fontSize: "var(--main-fs)", width: "140px" }}
          >
            {" "}
            حاله الدفع{" "}
          </label>
          <select
            id="paid-status"
            className="form-control"
            value={isPaid}
            onChange={handleChangePaid}
          >
            <option value={true}> تم الدفع </option>
            <option value={false}> لم يتم الدفع </option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default DeliveryOrderComp;
