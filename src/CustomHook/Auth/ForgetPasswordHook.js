import React, { useEffect, useState } from "react";
import { validateEmail } from "../../utils/validation/validateEmail";
import { notify } from "../../utils/Notification/useNotification";
import { forgetPassword } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const ForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  };
  localStorage.email = email

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    // validate
    if (!validateEmail(email)) {
      return notify("من فضلك ادخل بريد الكترونى صحيح", "warn");
    }

    const data = {
      email,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(forgetPassword(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Auth.forgetPassword);

  console.log(response);

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        setTimeout(() => {
          location.href = "/verifyResetCode";
        }, 2000);
        return notify(
          `تم ارسال الكود على البريد الالكترونى ${email}`,
          "success"
        );
      }
      if (
        response.status !== 200 &&
        response.data &&
        response.data.message === "no user belong to this email"
      ) {
        return notify(`هذا البريد الالكترونى غير موجود`, "error");
      }
    }
  }, [loading]);

  return [email, loading, isPress, handleChangeEmail, handleForgetPassword];
};

export default ForgetPasswordHook;
