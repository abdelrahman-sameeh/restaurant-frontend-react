import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserOrder } from "../../redux/actions/orderActions";

const UserOrderPaginationHook = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();

  let query;
  if (localStorage.userFilterOrderQuery) {
    query = localStorage.userFilterOrderQuery;
  }

  const getPageNum = (num) => {
    setPageNum(num);
    localStorage.page = num;
  };
  if (localStorage.page) query += `page=${localStorage.page}`;

  const renderUserOrder = async () => await dispatch(getLoggedUserOrder(query));

  const response = useSelector((state) => state.Order.getLoggedUserOrder);

  if (response && response.status === 200)
    localStorage.pagination = JSON.stringify(response.data.pagination);

  useEffect(() => {
    renderUserOrder();
  }, [pageNum]);

  return [pageNum, getPageNum];
};

export default UserOrderPaginationHook;
