import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { validateEmail } from "../../utils/validation/validateEmail";
import { validatePhone } from "../../utils/validation/validatePhone";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authActions";

const validation = (name, email, phone, password, confirmPassword) => {
  if (
    !name.length ||
    !email.length ||
    !password.length ||
    !confirmPassword.length
  ) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }
  if (name.length <= 2) {
    notify("يجب ان يكون الاسم اكبر من حرفين", "warn");
    return false;
  }
  if (!validateEmail(email)) {
    notify("من فضلك ادخل بريد الكترونى صحيح", "warn");
    return false;
  }
  if (phone && !validatePhone(phone)) {
    notify("من فضلك ادخل رقم مصرى", "warn");
    return false;
  }
  if (password.length < 4) {
    notify("يجب ان تكون كلمه السر اكبر من 4 حروف", "warn");
    return false;
  }
  if (password !== confirmPassword) {
    notify("يجب ان تكون كلمة السر وتأكيد كلمة السر متشابهين", "warn");
    return false;
  }
  return true;
};

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  // 1- get data from form
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  // 2- send request
  const handleRegister = async (e) => {
    e.preventDefault();
    // validation
    if (!validation(name, email, phone, password, confirmPassword)) {
      return false;
    }

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    if (phone) data.phone = phone;

    // dispatch action(register)
    setLoading(true);
    setIsPress(true);
    await dispatch(register(data));
    setLoading(false);
    setIsPress(false);
  };

  // 3- get response and show it in notification
  const response = useSelector((state) => state.Auth.register);

  useEffect(() => {
    if (!loading) {
      // in success status
      if (response.status === 201) {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        // navigate to login
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);

        notify("تم انشاء الحساب بنجاح", "success");
        return;
      }

      if (response.status !== 201 && response.data && response.data.error) {
        response.data.error.forEach((err) => {
          if (err.msg === "this email already used") {
            notify(
              "هذا البريد الالكترونى مستخدم بالفعل, من فضلك ادخل بريد الكترونى اخر",
              "error"
            );
          }
        });
        return;
      }

      // on error
      if (response.state !== 201) {
        notify("حدث خطأ , حاول مجددا فى وقت لاحق", "error");
        return;
      }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    isPress,
    loading,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleRegister,
  ];
};

export default RegisterHook;
