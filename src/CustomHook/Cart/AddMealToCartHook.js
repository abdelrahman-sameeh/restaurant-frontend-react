import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { addMealToCart } from "../../redux/actions/cartAction";

const AddMealToCartHook = () => {
  const [size, setSize] = useState("");
  const [count, setCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleChangeCount = (e) => setCount(e.target.value);
  const handleChangeSize = (e) => setSize(e.target.value);

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
    await dispatch(addMealToCart(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Cart.addMealToCart);


  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        return notify("تم اضافة الوجبة الى السلة", "success");
      }
    }
  }, [loading]);

  return [size, count, handleChangeSize, handleChangeCount, main];
};

export default AddMealToCartHook;
