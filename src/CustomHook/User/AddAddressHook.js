import React, { useEffect, useState } from "react";
import { validatePhone } from "../../utils/validation/validatePhone";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../redux/actions/addressActions";

const validation = (alias, details, phone, city, postalCode) => {
  if (!alias) {
    notify("ادخل الاسم المختصر للعنوان", "warn");
    return false;
  }

  if (alias.length <= 2) {
    notify("يجب ان يكون الاسم المختصر اكبر من حرفين", "warn");
    return false;
  }

  if (!validatePhone(phone)) {
    notify("من فضلك ادخل رقم مصرى", "warn");
    return false;
  }
  if (!details) {
    notify("ادخل تفاصيل العنوان", "warn");
    return false;
  }

  if (!city) {
    notify("ادخل اسم المدينة", "warn");
    return false;
  }
  if (!postalCode) {
    notify("ادخل الرمز البريدى", "warn");
    return false;
  }

  return true;
};

const AddAddressHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const handleChangeAlias = (e) => setAlias(e.target.value);
  const handleChangeDetails = (e) => setDetails(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangePostalCode = (e) => setPostalCode(e.target.value);

  const main = async (e) => {
    e.preventDefault();
    // validation
    if (!validation(alias, details, phone, city, postalCode)) {
      return false;
    }

    // send data

    const data = {
      alias,
      phone,
      city,
      postalCode,
      details,
    };
    console.log(data);

    setLoading(true);
    setIsPress(true);
    await dispatch(addAddress(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Address.addAddress);


  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        // reset states
        setAlias('')
        setCity('')
        setDetails('')
        setPostalCode('')
        setPhone('')
        return notify("تم انشاء العنوان بنجاح", "success");
      }
      if (
        response &&
        response.status !== 200 &&
        response.data &&
        response.data.error[0].msg.startsWith(
          "this address alias already exist"
        )
      ) {
        return notify(
          "الاسم المختصر للعنوان موجود بالفعل, قم بتغيره ثم اعد الاضافة",
          "error"
        );
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ اثناء انشاء العنوان ,حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    alias,
    details,
    phone,
    city,
    postalCode,
    handleChangeAlias,
    handleChangeDetails,
    handleChangePhone,
    handleChangeCity,
    handleChangePostalCode,
    main,
  ];
};

export default AddAddressHook;
