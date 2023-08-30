import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, getLoggedUserCart } from "../../redux/actions/cartAction";
import { notify } from "../../utils/Notification/useNotification";

const ApplyCouponHook = () => {
  const [coupon, setCoupon] = useState();
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangeCoupon = (e) => setCoupon(e.target.value);

  const applyCouponFeature = async (e) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(applyCoupon(coupon));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Cart.applyCoupon);
  const renderCart = async (_) => await dispatch(getLoggedUserCart());

  

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderCart();
        return notify("تم تطبيق كود الخصم بنجاح", "success");
      }
      if (response && response.status !== 200 && response.data.message==='this coupon is already expired') {
        return notify("تم انتهاء صلاحية الكوبون", "error");
      }
      if (response && response.status !== 200 && response.data) {
        return notify("كود الخصم غير صحيح", "error");
      }
    }
  }, [loading]);

  return [loading, isPress, coupon, handleChangeCoupon, applyCouponFeature];
};

export default ApplyCouponHook;
