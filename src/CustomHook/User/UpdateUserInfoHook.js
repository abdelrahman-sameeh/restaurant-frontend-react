import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../../utils/validation/validateEmail";
import { notify } from "../../utils/Notification/useNotification";
import { validatePhone } from "../../utils/validation/validatePhone";
import { updateUserInfo } from "../../redux/actions/userActions";

const validation = (name, email, phone, password) => {
  if (!name) {
    notify("اسم المستخدم مطلوب", "warn");
    return false;
  }

  if (name && name.length <= 2) {
    notify("يجب ان يكون الاسم اكبر من حرفين", "warn");
    return false;
  }

  if (!email) {
    notify("البريد الالكترونى مطلوب", "warn");
    return false;
  }

  if (email && !validateEmail(email)) {
    notify("ادخل بريد الكترونى صحيح", "warn");
    return false;
  }

  if (phone && !validatePhone(phone)) {
    notify("ادخل رقم هاتف مصرى", "warn");
    return false;
  }

  if (!password) {
    notify("كلمة المرور مطلوبة", "warn");
    return false;
  }
  
  return true;
};

const UpdateUserInfoHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  useEffect(() => {
    let user;
    if (localStorage.user) {
      user = JSON.parse(localStorage.user);
    }

    if (user && user.name) setName(user.name);
    if (user && user.email) setEmail(user.email);
    if (user && user.phone) setPhone(user.phone);
  }, []);

  const dispatch = useDispatch();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const main = async (e) => {
    e.preventDefault();
    // validation

    if (!validation(name, email, phone, password)) return false;

    // send data
    const data = {
      name,
      email,
      phone,
      password,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(updateUserInfo(data));
    setLoading(false);
    setIsPress(false);
  };

  // response
  const response = useSelector((state) => state.User.updateUserInfo);

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        // update local storage as new data
        localStorage.user = JSON.stringify(response.data.data);
        return notify("تم تعديل البيانات بنجاح", "success");
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message === "password is incorrect"
      ) {
        return notify("كلمة المرور غير صحيحة", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    name,
    email,
    phone,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    main,
  ];
};

export default UpdateUserInfoHook;
