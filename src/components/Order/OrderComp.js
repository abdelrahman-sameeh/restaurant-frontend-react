import React from "react";
import OrderItemComp from "./OrderItemComp";
import DeleteOrderHook from "../../CustomHook/Order/DeleteOrderHook";
import { Spinner } from "react-bootstrap";
import ChangeOrderStatusHook from "../../CustomHook/Order/ChangeOrderStatusHook";
import Loading from "../Utility/Loading";
import GetAllDeliveriesHook from "../../CustomHook/Delivery/GetAllDeliveriesHook";
import SetOrderToDeliveryHook from "../../CustomHook/Delivery/SetOrderToDeliveryHook";

const orderStatus = {
  preparing: "يتم تحضيره",
  inDeliver: "فى حالة التوصيل",
  delivered: "تم التوصيل",
};

const OrderComp = ({ order }) => {
  let user;
  if (localStorage.user) user = JSON.parse(localStorage.user);
  let orderItems = [];
  orderItems = order.orderItems;

  const [deleteLoading, deleteIsPress, handleDelete] = DeleteOrderHook();
  const [
    changeStatusLoading,
    changeStatusIsPress,
    isPaid,
    isDelivered,
    statusOfOrder,
    handleChangePaidStatus,
    handleChangeDelivered,
    handleChangeOrderStatus,
  ] = ChangeOrderStatusHook(order._id, order);

  const [deliveryLoading, deliveryIsPress, deliveries] = GetAllDeliveriesHook();

  const [
    setOderToDeliveryLoading,
    setOderToDeliveryIsPress,
    delivery,
    handleChangeDelivery,
    setOderToDelivery,
  ] = SetOrderToDeliveryHook(order);

  return (
    <div className="border rounded px-2 pt-2 my-2 pb-3">
      {(changeStatusIsPress && changeStatusLoading) ||
      (deliveryLoading, deliveryIsPress) ||
      (setOderToDeliveryLoading && setOderToDeliveryIsPress) ? (
        <Loading />
      ) : null}

      <div className="controls between flex-wrap">
        <span className="fw-bold"> كود الطلب : {order._id} </span>
        {order &&
        user &&
        (order.orderStatus === "preparing" || user.role === "admin") ? (
          <button
            onClick={() => handleDelete(order._id)}
            className="fw-bold btn special-btn start gap-"
          >
            حذف
            {deleteLoading && deleteIsPress && (
              <Spinner variant="light" animation="border" />
            )}
          </button>
        ) : (
          ""
        )}
      </div>

      {/* order items */}
      {orderItems && orderItems.length
        ? orderItems.map((item) => (
            <OrderItemComp key={item._id} item={item} meal={item.product} />
          ))
        : ""}

      {/* order information */}
      <div className="start gap-4 flex-wrap mb-3">
        <div>
          <div style={{ fontSize: "16px" }}>
            <span className="fw-bold"> حالة الطلب: </span>
            <span> {orderStatus[order.orderStatus]} الان </span>
          </div>
          <div style={{ fontSize: "16px" }}>
            <span className="fw-bold"> حالة التوصيل: </span>
            <span> {order.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"} </span>
          </div>
          <div style={{ fontSize: "16px" }}>
            <span className="fw-bold"> حالة الدفع: </span>
            <span> {order.isPaid ? "تم الدفع" : "لم يتم الدفع"} </span>
          </div>

          <div className="fw-bold" style={{ fontSize: "17px" }}>
            <span> السعر الكلى: </span>
            <span style={{ color: "var(--price-color)" }}>
              {" "}
              {order.totalPrice} EGY{" "}
            </span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: "16px" }}>
            <span className="fw-bold"> الاسم: </span>
            <span> {order.address.user.name} </span>
          </div>
          <div style={{ fontSize: "16px" }}>
            <span className="fw-bold"> البريد الالكترونى: </span>
            <span> {order.address.user.email} </span>
          </div>
          <div style={{ fontSize: "16px" }}>
            <span className="fw-bold"> الهاتف: </span>
            <span> {order.address.phone} </span>
          </div>

          <div style={{ fontSize: "17px" }}>
            <span className="fw-bold"> العنوان: </span>
            <span>{`${order.address.alias} - ${order.address.city}`}</span>
          </div>
        </div>
      </div>

      {/* order status */}
      {user && user.role === "admin" && (
        <div className="start gap-2 mt-2 flex-wrap">
          {/* order status */}
          <span className="center">
            <label
              htmlFor="order-status"
              style={{
                fontSize: "var(--main-fs)",
                width: "140px",
                display: "inline-block",
              }}
            >
              حاله الطلب
            </label>
            <select
              value={statusOfOrder}
              onChange={handleChangeOrderStatus}
              id="order-status"
              defaultValue={"0"}
              className="form-control"
            >
              <option value="preparing"> يتم تحضيره </option>
              <option value="inDeliver"> فى حالة التوصيل </option>
              <option value="delivered"> تم التوصيل </option>
            </select>
          </span>
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
            {deliveries && deliveries.length ? (
              <select
                value={delivery}
                onChange={handleChangeDelivery}
                id="user-delivery"
                className="form-control"
              >
                <option value="0"> اختر الدليفرى </option>

                {deliveries && deliveries.length
                  ? deliveries.map((delivery) => (
                      <option key={delivery._id} value={delivery._id}>
                        {" "}
                        {delivery.name}{" "}
                      </option>
                    ))
                  : ""}
              </select>
            ) : (
              ""
            )}
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
            <select
              value={isDelivered}
              onChange={handleChangeDelivered}
              id="delivery-status"
              className="form-control"
            >
              <option value="false"> لم يتم التوصيل </option>
              <option value="true"> تم التوصيل </option>
            </select>
          </span>
          <span className="center">
            <label
              htmlFor="paid-status"
              style={{ fontSize: "var(--main-fs)", width: "140px" }}
            >
              {" "}
              حاله الدفع{" "}
            </label>
            <select
              value={isPaid}
              onChange={handleChangePaidStatus}
              id="paid-status"
              defaultValue={"notPaid"}
              className="form-control"
            >
              <option value="true"> تم الدفع </option>
              <option value="false"> لم يتم الدفع </option>
            </select>
          </span>
        </div>
      )}
    </div>
  );
};

export default OrderComp;
