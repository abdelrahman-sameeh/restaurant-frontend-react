import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../utils/Notification/useNotification";
import { getLoggedUserCart, updateCart } from "../../redux/actions/cartAction";

const UpdateMealInCartHook = (item) => {
  const [size, setSize] = useState("");
  const [count, setCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleChangeCount = (e) => setCount(e.target.value);
  const handleChangeSize = (e) => setSize(e.target.value);

  // get data and put in states
  useEffect(() => {
    setSize(item.size);
    setCount(item.count);
  }, []);

  const main = async (mealId) => {
    // validation
    if (size == 0) {
      notify("من فضلك حدد الحجم", "warn");
      return false;
    }
    if (count == "" || count <= 0) {
      notify("من فضلك حدد الكمية", "warn");
      return false;
    }

    // send data
    const data = {
      id: mealId,
      count,
      size,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(updateCart(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Cart.updateCart);
  const renderCart = async (_) => await dispatch(getLoggedUserCart());

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderCart();
        notify("تم التعديل بنجاح", "success");
      }
    }
  }, [loading]);

  return [loading, isPress, size, count, handleChangeSize, handleChangeCount, main];
};

export default UpdateMealInCartHook;
