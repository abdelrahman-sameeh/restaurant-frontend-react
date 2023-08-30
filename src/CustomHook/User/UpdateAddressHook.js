import React, { useEffect, useState } from "react";
import { validatePhone } from "../../utils/validation/validatePhone";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoggedUserAddresses,
  getOneAddress,
  updateOneAddress,
} from "../../redux/actions/addressActions";
import { useParams } from "react-router-dom";

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

const UpdateAddressHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  // get data and set on states
  // id === address id
  const { id } = useParams();

  const renderSpecificAddress = async () => await dispatch(getOneAddress(id));
  let currentAddress;

  const currentAddressResponse = useSelector(
    (state) => state.Address.getOneAddress
  );

  if (
    currentAddressResponse &&
    currentAddressResponse.status === 200 &&
    currentAddressResponse.data
  ) {
    currentAddress = currentAddressResponse.data.data;
  }

  useEffect(() => {
    renderSpecificAddress();
  }, []);
  useEffect(() => {
    if (
      currentAddressResponse &&
      currentAddressResponse.status === 200 &&
      currentAddressResponse.data
    ) {
      setAlias(currentAddress.alias);
      setCity(currentAddress.city);
      setDetails(currentAddress.details);
      setPostalCode(currentAddress.postalCode);
      setPhone(currentAddress.phone);
    }
  }, [currentAddressResponse]);

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
      phone,
      city,
      postalCode,
      details,
    };

    if(currentAddress && currentAddress.alias.trim() !== alias.trim()){
      data.alias = alias.trim()
    }
    

    setLoading(true);
    setIsPress(true);
    await dispatch(updateOneAddress(id, data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Address.updateAddress);

  const renderAllAddresses = async () =>
    await dispatch(getLoggedUserAddresses());

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderAllAddresses();
        return notify("تم التعديل بنجاح", "success");
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

export default UpdateAddressHook;
