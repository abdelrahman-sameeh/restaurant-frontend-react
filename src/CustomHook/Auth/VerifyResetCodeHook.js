import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import {  verifyResetCode } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const VerifyResetCodeHook = () => {

  const [passwordResetCode, setPasswordResetCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangeResetCode = (e) => setPasswordResetCode(e.target.value);

  const handleVerifyResetCode = async (e) => {
    e.preventDefault();

    const data = {
      passwordResetCode
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(verifyResetCode(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Auth.verifyResetCode);

  console.log(response);

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        setTimeout(() => {
          location.href = "/setNewPassword";
        }, 2000);
        return notify(
          `تم التأكيد`,
          "success"
        );
      }
      if (
        response.status !== 200 &&
        response.data &&
        response.data.message==`you can't change password now, a password reset code is expired, reforget password again and try again`
      ) {
        return notify(`تم انتهاء صلاحية كود التأكيد, صلاحية الكود المرسل 10 دقائق من وقت الارسال`, "error");
      }
      if (
        response.status !== 200 &&
        response.data &&
        response.data.message==`this password reset code is incorrect`
      ) {
        return notify(`هذا الكود غير صحيح`, "error");
      }
    }
  }, [loading]);

  return [passwordResetCode, loading, isPress, handleChangeResetCode, handleVerifyResetCode];
};

export default VerifyResetCodeHook;
