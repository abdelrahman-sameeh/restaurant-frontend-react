import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeOrderStatus } from "../../redux/actions/orderActions";
import { notify } from "../../utils/Notification/useNotification";

const ChangeOrderStatusHook = (id, order) => {
  const [isPaid, setIsPaid] = useState(undefined);
  const [isDelivered, setIsDelivered] = useState(undefined);
  const [orderStatus, setOrderStatus] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsDelivered(order.isDelivered);
    setIsPaid(order.isPaid);
    setOrderStatus(order.orderStatus);
  }, []);

  const data = {};

  data.isPaid = isPaid ? isPaid : undefined;
  data.isDelivered = isDelivered ? isDelivered : undefined;
  data.orderStatus = orderStatus ? orderStatus : undefined;

  const handleChangePaidStatus = (e) => {
    setIsPaid(e.target.value);
  };
  const handleChangeDelivered = (e) => {
    setIsDelivered(e.target.value);
  };
  const handleChangeOrderStatus = (e) => {
    setOrderStatus(e.target.value);
  };

  const main = async () => {
    if (
      (isPaid === order.isPaid &&
        isDelivered === order.isDelivered &&
        orderStatus === order.orderStatus) ||
      (isPaid === undefined &&
        isDelivered === undefined &&
        orderStatus === undefined)
    ) {
      return false;
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(changeOrderStatus(id, data));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    main();
  }, [isPaid, isDelivered, orderStatus]);

  const response = useSelector((state) => state.Order.changeOrderStatus);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        return notify("تم التحديث بنجاح", "success");
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    isPaid,
    isDelivered,
    orderStatus,
    handleChangePaidStatus,
    handleChangeDelivered,
    handleChangeOrderStatus,
  ];
};

export default ChangeOrderStatusHook;
