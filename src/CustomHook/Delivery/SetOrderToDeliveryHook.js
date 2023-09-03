import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderToUserDelivery } from "../../redux/actions/deliveryActions";
import { notify } from "../../utils/Notification/useNotification";



const SetOrderToDeliveryHook = (order) => {
  const [delivery, setDelivery] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
      setDelivery(order.delivery);
  }, []);

  const handleChangeDelivery = (e) => {
    setDelivery(e.target.value);
  };

  const data = {};

  if (delivery) data.user = delivery;
  if (order && order._id) data.order = order._id;

  const setOderToDelivery = async () => {
    if (delivery === "0") {
      return notify("من فضلك اختر الديليفرى", "warn");
    }

    if (delivery === order.delivery || delivery === "") {
      return false;
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(setOrderToUserDelivery(data));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    setOderToDelivery();
  }, [delivery]);

  const response = useSelector((state) => state.Delivery.setOrderToDelivery);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        return notify("تم التعديل بنجاح", "success");
      }

      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [loading, isPress, delivery, handleChangeDelivery, setOderToDelivery];
};

export default SetOrderToDeliveryHook;
