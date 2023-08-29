import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForgetPassword } from "../../redux/actions/authActions";
import { notify } from "../../utils/Notification/useNotification";

const SetNewPasswordAfterForgetHook = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    const data = {
      password,
      email: localStorage.email
    };

    setIsPress(true);
    setLoading(true);
    await dispatch(changeForgetPassword(data));
    setIsPress(false);
    setLoading(false);
  };

  const response = useSelector(state=>state.Auth.changeForgetPassword)
  
  useEffect(()=>{
    if(response.status===200){
      setTimeout(() => {
        location.href = '/login'
      }, 1500);
      return notify('تم تغير كلمة السر بنجاح', 'success')
    }
    if(response.status!==200 && response.data){
      return notify('حدث خطأ حاول فى وقت لاحق', 'error')
    }

  }, [loading])

  return [
    password,
    loading,
    isPress,
    handleChangePassword,
    handleSetNewPassword,
  ];
};

export default SetNewPasswordAfterForgetHook;
