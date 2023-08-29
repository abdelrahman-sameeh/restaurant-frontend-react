import { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions";

const validation = (email, password) => {
  if (!email || !password) {
    notify("من فضلك اكمل البيانات", "warn");
    return false;
  }

  if (password.length < 4) {
    notify("يجب ان تكون كلمة المرور اكبر من ثلاث حروف", "warn");
    return false;
  }

  return true;
};

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    // validation
    if (!validation(email, password)) {
      return false;
    }

    const data = {
      email,
      password,
    };

    // dispatch
    setLoading(true);
    setIsPress(true);
    await dispatch(login(data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Auth.login);

  console.log(response);

  // response and notification
  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        setEmail("");
        setPassword("");

        

        // store user data and token in local storage
        localStorage.user = JSON.stringify(response.data.data);
        localStorage.token = `Bearer ${response.data.token}`;

        // navigate to home page
        setTimeout(() => {
          location.href = '/'
        }, 1500);

        return notify("تم تسجيل الدخول بنجاح", "success");
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message === "This email not found"
      ) {
        return notify("لا يوجد حساب لهذا البريد الالكترونى", "error");
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message === "Email or password is incorrect"
      ) {
        return notify("خطأ فى البريد الالكترونى او كلمة المرور ", "error");
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    isPress,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  ];
};

export default LoginHook;
