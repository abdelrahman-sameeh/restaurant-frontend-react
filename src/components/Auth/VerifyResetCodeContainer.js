import React from "react";
import CurrentLocation from "../Utility/CurrentLocation";
import VerifyResetCodeHook from "../../CustomHook/Auth/VerifyResetCodeHook";
import { Spinner } from "react-bootstrap";

const VerifyResetCodeContainer = () => {
  const [
    passwordResetCode,
    loading,
    isPress,
    handleChangeResetCode,
    handleVerifyResetCode,
  ] = VerifyResetCodeHook();

  return (
    <div className="container">
      <CurrentLocation current={"تأكيد الكود المرسل"} />
      <form className="p-3 form">
        <div className="mb-3">
          <label htmlFor="pass-reset-code" className="form-label">
            الكود
          </label>
          <input
            value={passwordResetCode}
            onChange={handleChangeResetCode}
            type="text"
            className="form-control"
            id="pass-reset-code"
          />
        </div>
        <button
          onClick={handleVerifyResetCode}
          type="submit"
          className="btn special-btn start gap-1"
        >
          تأكيد الكود
          {loading && isPress && <Spinner variant="light" animation="border" />}
        </button>
      </form>
    </div>
  );
};

export default VerifyResetCodeContainer;
