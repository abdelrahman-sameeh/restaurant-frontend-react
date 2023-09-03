import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrder,
  getAdminAllOrders,
  getLoggedUserOrder,
} from "../../redux/actions/orderActions";
import { notify } from "../../utils/Notification/useNotification";
import AdminFilteringOrdersHook from "./AdminFilteringOrdersHook";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

let query;
if (localStorage.adminFilterOrderQuery) {
  query = localStorage.adminFilterOrderQuery;
}
if (localStorage.page) query += `page=${localStorage.page}`;

const DeleteOrderHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteOrder(id));
    setIsPress(false);
    setLoading(false);
  };

  const response = useSelector((state) => state.Order.deleteOrder);
  const renderUserOrder = async () => await dispatch(getLoggedUserOrder());
  const renderAdminOrder = async () => await dispatch(getAdminAllOrders(query));

  const renderAdminOrderResponse = useSelector(
    (state) => state.Order.getAdminAllOrders
  );

  if (renderAdminOrderResponse && renderAdminOrderResponse.status === 200) {
    localStorage.pagination = JSON.stringify(
      renderAdminOrderResponse.data.pagination
    );
  }

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        if (user && user.role === "user") renderUserOrder();
        if (user && user.role === "admin") renderAdminOrder();
        return notify("تم حذف الطلب بنجاح", "success");
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ اثناء الحذف", "error");
      }
    }
  }, [loading]);

  return [loading, isPress, handleDelete];
};

export default DeleteOrderHook;
