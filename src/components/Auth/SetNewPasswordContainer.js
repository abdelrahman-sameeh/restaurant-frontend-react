import React from "react";
import CurrentLocation from "../Utility/CurrentLocation";
import SetNewPasswordAfterForgetHook from "../../CustomHook/Auth/SetNewPasswordAfterForgetHook";
import { Spinner } from "react-bootstrap";

const SetNewPasswordContainer = () => {
  const [
    password,
    loading,
    isPress,
    handleChangePassword,
    handleSetNewPassword,
  ] = SetNewPasswordAfterForgetHook();

  return (
    <div className="container">
      <CurrentLocation current={"تغير كلمة المرور"} />
      <form
        className="p-3 form"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            كلمة المرور الجديدة
          </label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            id="exampleInputEmail"
          />
        </div>
        <button
          onClick={handleSetNewPassword}
          type="submit"
          className="btn special-btn start gap-1"
        >
          حفظ
          {loading && isPress && <Spinner variant="light" animation="border" />}
        </button>
      </form>
    </div>
  );
};

export default SetNewPasswordContainer;
