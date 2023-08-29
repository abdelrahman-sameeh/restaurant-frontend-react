import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteOneCoupon,
  getAllCoupons,
} from "../../redux/actions/couponAction";
import { notify } from "../../utils/Notification/useNotification";

const DeleteCouponHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const deleteCoupon = async (id) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteOneCoupon(id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Coupon.deleteOneCoupon);
  const renderAllCoupons = async () => dispatch(getAllCoupons());

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderAllCoupons();
        return notify("تم حذف الكوبون بنجاح", "success");
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ اثناء حذف الكوبون");
      }
    }
  }, [loading]);

  return [loading, isPress, deleteCoupon];
};

export default DeleteCouponHook;
