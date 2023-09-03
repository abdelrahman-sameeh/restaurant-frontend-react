import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { validateEmail } from "../../utils/validation/validateEmail";
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount } from "../../redux/actions/adminActions";

const validation = (name, email, role, SSH, password) => {
  if (!name || !email || !password || !role) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }

  if (name.length <= 2 || name.length > 30) {
    notify("يجب ان يكون الاسم اكبر من حرفين واقل من 30");
    return false;
  }

  if (!validateEmail(email)) {
    notify("من فضلك ادخل بريد الكترونى صحيح", "warn");
    return false;
  }

  if (password.length < 4) {
    notify("يجب ان تكون كلمة المرور اكبر من 3 حروف", "warn");
    return false;
  }

  if (role === "delivery" && (!SSH || SSH.length < 4)) {
    notify("يجب ان يكون رمز التشفير اكبر من 3 حروف", "warn");
    return false;
  }

  return true;
};

const AdminAddAccountHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [SSH, setSSH] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeRole = (e) => setRole(e.target.value);
  const handleChangeSSH = (e) => setSSH(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleAddAccount = async (e) => {
    e.preventDefault();
    // validation
    if (!validation(name, email, role, SSH, password)) {
      return false;
    }

    // send request
    const data = {
      name,
      email,
      role,
      password,
    };
    if (SSH != "" && role === "delivery") {
      data.SSH = SSH;
    }

    setLoading(true);
    setIsPress(true);
    await dispatch(addNewAccount(data));
    setIsPress(false);
    setLoading(false);
  };

  const response = useSelector((state) => state.Admin.createAccount);

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 201) {
        notify("تم انشاء الحساب بنجاح", "success");
        return;
      }
      if (
        response &&
        response.status === 400 &&
        response.data.error[0].msg === "This email already used"
      ) {
        notify("هذا الحساب مستخدم بالفعل", "error");
        return;
      }
      if (response && response.status === 400 && response.data) {
        notify("حدث خطأ ,حاول مجددا فى وقت لاحق", "error");
        return;
      }
    } 
  }, [loading]);

  return [
    loading,
    isPress,
    name,
    email,
    role,
    SSH,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangeRole,
    handleChangeSSH,
    handleChangePassword,
    handleAddAccount,
  ];
};

export default AdminAddAccountHook;
