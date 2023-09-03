import React from "react";
import CurrentLocation from "../Utility/CurrentLocation";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import ChangePasswordHook from "../../CustomHook/Auth/ChangePasswordHook";
import { Spinner } from "react-bootstrap";

const ChangePasswordContainer = () => {
  const [
    loading,
    isPress,
    oldPassword,
    password,
    handleChangeOldPassword,
    handleChangePassword,
    main,
  ] = ChangePasswordHook();

  return (
    <div>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <div className="row-app">
        <div className="container">
          <CurrentLocation current={"تغير كلمة المرور"} />
          <form className="form">
            <div className="mb-3">
              <label htmlFor="old-password" className="form-label">
                كلمة المرور القديمة *
              </label>
              <input
                value={oldPassword}
                onChange={handleChangeOldPassword}
                type="password"
                className="form-control"
                id="old-password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="new-password" className="form-label">
                كلمه المرور الجديدة *
              </label>
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                className="form-control"
                id="new-password"
              />
            </div>
            <button
              onClick={main}
              type="submit"
              className="btn special-btn start gap-1"
            >
              تغير كلمة المرور
              {loading && isPress && (
                <Spinner variant="light" animation="border" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordContainer;
