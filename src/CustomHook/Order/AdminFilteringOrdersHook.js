import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAdminAllOrders } from "../../redux/actions/orderActions";

const AdminFilteringOrdersHook = () => {
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


  localStorage.adminFilterOrderQuery = query;


  const handleChangeOrderStatus = (e) => {
    if (orderStatus == e.target.dataset.filter) {
      return setOrderStatus("");
    }
    setOrderStatus(e.target.dataset.filter);
  };

  const handleChangePaidOrder = (e) => {
    if (isPaid == e.target.dataset.filter) {
      return setIsPaid("");
    }
    setIsPaid(e.target.dataset.filter);
  };

  const handleChangeDeliveryOrder = (e) => {
    if (isDelivered == e.target.dataset.filter) {
      return setIsDelivered("");
    }
    setIsDelivered(e.target.dataset.filter);
  };

  const renderAdminOrder = async () => {
    await dispatch(getAdminAllOrders(query));
  };

  useEffect(() => {
    renderAdminOrder();
  }, [isPaid, isDelivered, orderStatus]);

  return [
    query,
    handleChangeOrderStatus,
    handleChangePaidOrder,
    handleChangeDeliveryOrder,
  ];
};

export default AdminFilteringOrdersHook;
