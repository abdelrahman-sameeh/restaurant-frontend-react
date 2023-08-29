import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../utils/Notification/useNotification";
import { useParams } from "react-router-dom";
import {
  getOneCoupon,
  updateOneCoupon,
} from "../../redux/actions/couponAction";

const validation = (name, discount, expire) => {
  if (name && name.length <= 2) {
    notify("من فضلك ادخل اسم اكبر", "warn");
    return false;
  }
  if (discount && (discount <= 0 || discount > 100)) {
    notify("يجب ان تكون قيمة الخصم بين 0 و 100 ", "warn");
    return false;
  }
  const dateNow = Date.now();
  const chosenDate = new Date(expire).getTime();
  if (expire && dateNow >= chosenDate) {
    notify("يجب اختيار تاريخ اكبر من تاريخ اليوم", "warn");
    return false;
  }
  return true;
};
const UpdateCouponHook = () => {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [expire, setExpire] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();
  const couponId = useParams().id;
  const renderCoupon = async (_) => dispatch(getOneCoupon(couponId));
  useEffect(() => {
    renderCoupon();
  }, []);

  const oneCoupon = useSelector((state) => state.Coupon.getOneCoupon);

  useEffect(() => {
    if (oneCoupon && oneCoupon.data && oneCoupon.data.data) {
      const coupon = oneCoupon.data.data;
      setName(coupon.name);
      setDiscount(coupon.discount);
      setExpire(coupon.expire.split("T")[0]);
    }
  }, [oneCoupon]);

  /*
    @desc
      1- get specific coupon and set data on it
      2- get data and set on states
      3- validation
      4- send request
      5- get response and show notification
  */
  // 1-  get specific coupon and set data on it

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeDiscount = (e) => setDiscount(e.target.value);
  const handleChangeExpire = (e) => setExpire(e.target.value);

  const main = async (e) => {
    e.preventDefault();

    // validation
    if (!validation(name, discount, expire)) {
      return false;
    }


    const data = {
      discount,
      expire,
    };
    if (name !== oneCoupon.data.data.name) {
      data.name = name;
    }



    setLoading(true);
    setIsPress(true);
    await dispatch(updateOneCoupon(couponId, data));
    setLoading(false);
    setIsPress(false);
  };

  // response and set notification
  const response = useSelector((state) => state.Coupon.updateOneCoupon);


  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        return notify("تم تعديل الكوبون بنجاح", "success");
      }
      if (
        response.status !== 200 &&
        response.data &&
        response.data.error &&
        response.data.error[0].msg === "Coupon name must be unique"
      ) {
        return notify("هذا الكوبون موجود بالفعل");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    name,
    discount,
    expire,
    handleChangeDiscount,
    handleChangeExpire,
    handleChangeName,
    main,
  ];
};

export default UpdateCouponHook;
