import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAllOrders } from "../../redux/actions/orderActions";

const GetAdminAllOrdersHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  let query;
  if(localStorage.adminFilterOrderQuery){
    query = localStorage.adminFilterOrderQuery
  }
  if (localStorage.page) query += `page=${localStorage.page}`;


  const dispatch = useDispatch();

  const getAdminOrders = async () => {
    setIsPress(true);
    await dispatch(getAdminAllOrders(query));
    setIsPress(false);
  };
  useEffect(() => {
    getAdminOrders();
  }, []);

  const response = useSelector((state) => state.Order.getAdminAllOrders);


  let adminOrders = [];

  if (
    response &&
    response.status === 200 &&
    response.data &&
    response.data.data
  ) {
    adminOrders = response.data.data;
    localStorage.pagination = JSON.stringify(response.data.pagination)
  }

  return [loading, isPress, adminOrders];
};

export default GetAdminAllOrdersHook;
