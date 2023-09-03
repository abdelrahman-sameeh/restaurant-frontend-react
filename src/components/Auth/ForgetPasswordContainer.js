import React from "react";
import CurrentLocation from "../Utility/CurrentLocation";
import { Spinner } from "react-bootstrap";
import ForgetPasswordHook from "../../CustomHook/Auth/ForgetPasswordHook";

const ForgetPasswordContainer = () => {
  const [email, loading, isPress, handleChangeEmail, handleForgetPassword] =
    ForgetPasswordHook();

  return (
    <div className="container">
      <CurrentLocation current={"نسيت كلمه السر"} />
      <form
      className="form"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            البريد الالكترونى
          </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail"
          />
        </div>
        <button
          onClick={handleForgetPassword}
          type="submit"
          className="btn special-btn start gap-1"
        >
          ارسال الكود
          {isPress && loading && <Spinner variant="light" animation="border" />}
        </button>
      </form>
    </div>
  );
};

export default ForgetPasswordContainer;
