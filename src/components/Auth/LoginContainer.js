import React from "react";
import { Link } from "react-router-dom";
import LoginHook from "../../CustomHook/Auth/LoginHook";
import { Spinner } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";

const LoginContainer = () => {
  const [
    email,
    password,
    loading,
    isPress,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  ] = LoginHook();

  return (
    <div className="container">
      <CurrentLocation current={"تسجيل الدخول"} />
      <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            البريد الالكترونى *
          </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConf" className="form-label">
            كلمه المرور *
          </label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            id="exampleInputPasswordConf"
          />
        </div>
        <button
          onClick={handleLogin}
          type="submit"
          className="btn special-btn start gap-1"
        >
          <span>تسجيل الدخول</span>
          {loading && isPress && <Spinner variant="light" animation="border" />}
        </button>

        <div className="mt-2">
          ليس لديك حساب؟
          <Link to="/register" style={{ color: "var(--alt-color)" }}>
            {" "}
            اضغط هنا{" "}
          </Link>
        </div>
        <div className="mt-2">
          هل نسيت كلمة المرور؟
          <Link to="/forgetPassword" style={{ color: "var(--alt-color)" }}>
            {" "}
            اضغط هنا{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;
