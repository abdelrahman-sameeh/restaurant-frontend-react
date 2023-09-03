import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserOrder } from "../../redux/actions/orderActions";

const UserFilteringOrdersHook = () => {
  const [orderStatus, setOrderStatus] = useState("");
  const [isPaid, setIsPaid] = useState("");
  const [isDelivered, setIsDelivered] = useState("");

  const dispatch = useDispatch();

  let query = "limit=2&";
  if (orderStatus) {
    query += `orderStatus=${orderStatus}&`;
  }
  if (isPaid) {
    query += `isPaid=${isPaid}&`;
  }
  if (isDelivered) {
    query += `isDelivered=${isDelivered}&`;
  }

  localStorage.userFilterOrderQuery = query;

  const handleChangeOrderStatus = (e) => {
    if (localStorage.page) localStorage.removeItem("page");
    if (orderStatus == e.target.dataset.filter) {
      return setOrderStatus("");
    }
    setOrderStatus(e.target.dataset.filter);
  };

  const handleChangePaidOrder = (e) => {
    if (localStorage.page) localStorage.removeItem("page");
    if (isPaid == e.target.dataset.filter) {
      return setIsPaid("");
    }
    setIsPaid(e.target.dataset.filter);
  };

  const handleChangeDeliveryOrder = (e) => {
    if (localStorage.page) localStorage.removeItem("page");
    if (isDelivered == e.target.dataset.filter) {
      return setIsDelivered("");
    }
    setIsDelivered(e.target.dataset.filter);
  };

  const renderUserOrder = async () => {
    await dispatch(getLoggedUserOrder(query));
  };

  useEffect(() => {
    renderUserOrder();
  }, [isPaid, isDelivered, orderStatus]);

  const response = useSelector((state) => state.Order.getLoggedUserOrder);

  if (response && response.status === 200)
    localStorage.pagination = JSON.stringify(response.data.data);

  return [
    query,
    handleChangeOrderStatus,
    handleChangePaidOrder,
    handleChangeDeliveryOrder,
  ];
};

export default UserFilteringOrdersHook;
