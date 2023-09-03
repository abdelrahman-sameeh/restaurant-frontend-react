import React from "react";
import { Link } from "react-router-dom";
import RegisterHook from "../../CustomHook/Auth/RegisterHook";
import { Spinner } from "react-bootstrap";

const RegisterContainer = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    isPress,
    loading,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleRegister,
  ] = RegisterHook();

  return (
    <div>
      <form className="mb-2 form">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            الاسم *
          </label>
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            className="form-control"
            id="exampleInputName"
          />
        </div>
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
          <label htmlFor="phone" className="form-label">
            الهاتف 
          </label>
          <input
            value={phone}
            onChange={handleChangePhone}
            type="phone"
            className="form-control"
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            كلمه المرور *
          </label>
          <input
            value={password}
            onChange={handleChangePassword}
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
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            type="password"
            className="form-control"
            id="exampleInputPasswordConf"
          />
        </div>
        <button
          onClick={handleRegister}
          style={{ width: "fit-content" }}
          className="btn special-btn start gap-1"
          type="submit"
        >
          <span>تسجيل الدخول</span>
          {isPress && loading ? (
            <Spinner variant="light" animation="border" />
          ) : null}
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
