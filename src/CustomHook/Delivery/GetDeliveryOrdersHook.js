import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeliveryOrders } from "../../redux/actions/deliveryActions";

const GetDeliveryOrdersHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getDeliveryOrders());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.Delivery.getDeliveryOrders);


  let orders = [];

  if (response && response.status === 200) {
    orders = response.data.data;
    localStorage.pagination = JSON.stringify(response.data.pagination)
  }

  return [loading, isPress, orders];
};

export default GetDeliveryOrdersHook;
