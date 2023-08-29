import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../redux/actions/couponAction";

const validation = (name, discount, expire) => {
  if (name.length <= 2) {
    notify("من فضلك ادخل اسم اكبر", "warn");
    return false;
  }
  if (discount <= 0 || discount > 100 || discount === '') {
    notify("يجب ان تكون قيمة الخصم بين 0 و 100 ", "warn");
    return false;
  }
  const dateNow = Date.now();
  const chosenDate = new Date(expire).getTime();
  if (!expire || dateNow >= chosenDate) {
    notify("يجب اختيار تاريخ اكبر من تاريخ اليوم", "warn");
    return false;
  }
  return true;
};

/*
  @desc
    1- get data and set on states
    2- validation
    3- send request
    4- get response and show notification
*/
const AddCouponHook = () => {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState('');
  const [expire, setExpire] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch()

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeDiscount = (e) => setDiscount(e.target.value);
  const handleChangeExpire = (e) => setExpire(e.target.value);

  const main = async(e) => {
    e.preventDefault();

    // validation
    if (!validation(name, discount, expire)) {
      return false;
    }

    const data = {
      name,
      discount,
      expire,
    };

    setLoading(true)
    setIsPress(true)
    await dispatch(addCoupon(data))
    setLoading(false)
    setIsPress(false)
  };
  const response = useSelector(state=>state.Coupon.addCoupon);
  useEffect(()=>{
    if(!loading){
      if(response.status===201){
        setExpire('')
        setName('')
        setDiscount('')
        return notify('تم انشاء الكوبون بنجاح', 'success')
      }
      if(response.status!==201 && response.data && response.data.error && response.data.error[0].msg==='Coupon name must be unique'){
        return notify('هذا الكوبون موجود بالفعل')
      }
    }
  }, [loading])

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

export default AddCouponHook;
