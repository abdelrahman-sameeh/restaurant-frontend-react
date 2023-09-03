import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeliveries } from "../../redux/actions/deliveryActions";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const GetAllDeliveriesHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const renderAllDeliveries = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getAllDeliveries());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    if (user && user.role === "admin") {
      renderAllDeliveries();
    }
  }, []);

  const response = useSelector((state) => state.Delivery.getAllDeliveries);

  let deliveries = [];
  if (response && response.data && response.data.data) {
    deliveries = response.data.data;
  }

  return [loading, isPress, deliveries];
};

export default GetAllDeliveriesHook;
