import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDeliveryOrders } from "../../redux/actions/deliveryActions";

const DeliveryPaginationHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const [isPress, setIsPress] = useState(false)

  const getPageNum = async (num) => {
    setLoading(true)
    setIsPress(true)
    await dispatch(getDeliveryOrders(`page=${num}`));
    setLoading(false)
    setIsPress(false)
  };

  return [loading, isPress, getPageNum];
};

export default DeliveryPaginationHook;
