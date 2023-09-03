import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAllOrders } from "../../redux/actions/orderActions";

const AdminOrderPaginationHook = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();

  let query;
  if (localStorage.adminFilterOrderQuery) {
    query = localStorage.adminFilterOrderQuery;
  }

  const getPageNum = (num) => {
    setPageNum(num);
    localStorage.page = num;
  };
  if (localStorage.page) query += `page=${localStorage.page}`;

  const renderAdminOrder = async () => await dispatch(getAdminAllOrders(query));

  const response = useSelector((state) => state.Order.getAdminAllOrders);

  if (response && response.status === 200)
    localStorage.pagination = JSON.stringify(response.data.pagination);


  useEffect(() => {
    renderAdminOrder();
  }, [pageNum]);

  return [pageNum, getPageNum];
};

export default AdminOrderPaginationHook;
