import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserOrder } from "../../redux/actions/orderActions";

const GetLoggedUserOrderHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  let query  ;
  if(localStorage.userFilterOrderQuery){
    query = localStorage.userFilterOrderQuery
  }
  if (localStorage.page) query += `page=${localStorage.page}`;


  const dispatch = useDispatch();

  const getUserOrders = async () => {
    setIsPress(true);
    await dispatch(getLoggedUserOrder(query));
    setIsPress(false);
  };
  useEffect(() => {
    getUserOrders();
  }, []);

  const response = useSelector((state) => state.Order.getLoggedUserOrder);

  console.log(response);

  let userOrders=[];

  if (
    response &&
    response.status === 200 &&
    response.data &&
    response.data.data
  ) {
    userOrders = response.data.data;
    localStorage.pagination = JSON.stringify(response.data.pagination)
  }

  return [loading, isPress, userOrders];
};

export default GetLoggedUserOrderHook;
