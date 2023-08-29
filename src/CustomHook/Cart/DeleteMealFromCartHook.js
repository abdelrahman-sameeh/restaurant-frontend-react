import React, { useEffect, useState } from "react";
import {
  deleteOneFromCart,
  getLoggedUserCart,
} from "../../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../utils/Notification/useNotification";

const DeleteMealFromCartHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const deleteMealFromCart = async (id) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteOneFromCart(id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Cart.deleteOneFromCart);
  const renderCart = async (_) => await dispatch(getLoggedUserCart());

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        renderCart();
        return notify("تم حذف الوجبة من السلة بنجاح", "success");
      }
    }
  }, [loading]);

  return [loading, isPress, deleteMealFromCart];
};

export default DeleteMealFromCartHook;
