import React from "react";
import { Link } from "react-router-dom";

const RegisterContainer = () => {
  return (
    <div>
      <form className="mb-2">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            الاسم *
          </label>
          <input type="text" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            البريد الالكترونى *
          </label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            الهاتف *
          </label>
          <input type="phone" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            كلمه المرور *
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConf" className="form-label">
            تأكيد كلمه المرور *
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
          هل لديك حساب بالفعل ؟
          <Link to="/login" style={{ color: "var(--alt-color)" }}>
            {" "}
            اضغط هنا{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterContainer;
