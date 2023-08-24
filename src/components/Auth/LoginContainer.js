import React from "react";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            البريد الالكترونى *
          </label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConf" className="form-label">
            كلمه المرور *
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPasswordConf"
          />
        </div>
        <button type="submit" className="btn special-btn">
          تسجيل الدخول
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
