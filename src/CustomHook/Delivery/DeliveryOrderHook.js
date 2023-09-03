import React, { useEffect, useState } from "react";
import { changeOrderStatus } from "../../redux/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../utils/Notification/useNotification";




const DeliveryOrderHook = (id, order) => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [isPaid, setIsPaid] = useState();
  const [isDelivered, setIsDelivered] = useState() 

  const dispatch = useDispatch();

  useEffect(()=>{
    setIsPaid(order.isPaid)
    setIsDelivered(order.isDelivered)
  }, [order])

    
  const handleChangePaid = (e) => {
    setIsPaid(e.target.value);
  };
  const handleChangeDelivered = (e) => {
    setIsDelivered(e.target.value);
  };

  const data = {};

  data.isPaid = isPaid ? isPaid : undefined;
  data.isDelivered = isDelivered ? isDelivered : undefined;


  const main = async () => {
    if (
      (order && isPaid === order.isPaid && isDelivered === order.isDelivered) ||
      (isPaid === undefined && isDelivered === undefined)
    ) {
      return false;
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(changeOrderStatus(order._id, data));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    main();
  }, [isPaid, isDelivered]);

  const response = useSelector((state) => state.Order.changeOrderStatus);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        return notify("تم التحديث بنجاح", "success");
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    isPaid,
    isDelivered,
    handleChangePaid,
    handleChangeDelivered,
  ];
};

export default DeliveryOrderHook;
