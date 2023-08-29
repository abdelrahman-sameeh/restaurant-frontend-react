import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/authActions";
import { notify } from "../../utils/Notification/useNotification";

const ChangePasswordHook = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangeOldPassword = (e) => setOldPassword(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  // main
  const main = async (e) => {
    e.preventDefault();

    // validation
    if (password.length < 4) {
      return notify("يجب الا تقل حروف كلمة المرور عن اربعة", "warn");
    }

    const data = {
      oldPassword,
      password,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(changePassword(data));
    setLoading(false);
    setIsPress(false);
  };

  // response
  const response = useSelector((state) => state.Auth.changePassword);

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        setTimeout(() => {
          location.href = "/login";
        }, 1500);
        return notify(
          "تم تغير كلمة المرور, من فضلك سجل دخولك من جديد",
          "success"
        );
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message === "old password is incorrect"
      ) {
        return notify("كلمة المرور القديمة خطأ", "error");
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message ===
          "you are change password yet, please login again"
      ) {
        return notify(
          "تم تغير كلمةالمرور مؤخرا, قم بتسجيل الدخول ثم تغير كلمة المرور",
          "error"
        );
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message !== "old password is incorrect"
      ) {
        return notify("حدث خطأ", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    oldPassword,
    password,
    handleChangeOldPassword,
    handleChangePassword,
    main,
  ];
};

export default ChangePasswordHook;
