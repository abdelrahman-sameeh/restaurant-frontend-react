import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { createCashOrder } from "../../redux/actions/orderActions";
import { getLoggedUserCart } from "../../redux/actions/cartAction";

const CreateCashOrderHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [address, setAddress] = useState("0");
  const dispatch = useDispatch();

  const handleChangeAddress = (e) => setAddress(e.target.value);

  // main
  const handleAddOrder = async () => {
    // validation
    if (address == "0") {
      return notify("من فضلك اختر عنوان", "warn");
    }

    const data = {
      address,
    };

    // send request
    setLoading(true);
    setIsPress(true);
    await dispatch(createCashOrder(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Order.createCashOrder);
  const renderCart = async () => await dispatch(getLoggedUserCart());

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        renderCart()
        return notify("تم انشاء الطلب بنجاح", "success");
      }
      if (response.status !== 200 && response.data) {
        return notify("حدث خطأ حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [loading, isPress, address, handleChangeAddress, handleAddOrder];
};

export default CreateCashOrderHook;
