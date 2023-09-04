import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../utils/Notification/useNotification";
import { updateSSH } from "../../redux/actions/deliveryActions";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const ChangeSSHHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [SSH, setSSH] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeSSH = (e) => setSSH(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (SSH == "" || password == "") {
      return notify("من فضلك اكمل البيانات");
    }

    if (SSH.length < 4) {
      return notify("يجب ان يكون رمز التشفير اكبر من 4 حروف", "warn");
    }

    const data = {
      SSH,
      password,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(updateSSH(user._id, data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Delivery.updateSSH);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        setPassword('')
        setSSH('')
        return notify("تم تعديل رمز التشفير بنجاح", "success");
      }
      if(response.status===400 && response.data.message.startsWith('Password is Incorrect')){
        return notify('كلمة المرور خطأ', 'error')
      }
      if(response.status===400 && response.data.message.startsWith('you have no permission for this route')){
        return notify('غير مسموح', 'error')
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ حاول مرة اخرى", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    SSH,
    password,
    handleChangeSSH,
    handleChangePassword,
    handleUpdate,
  ];
};

export default ChangeSSHHook;
