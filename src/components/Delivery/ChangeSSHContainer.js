import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row, Spinner } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import ChangeSSHHook from "../../CustomHook/Delivery/ChangeSSHHook";

const ChangeSSHContainer = () => {
  const [
    loading,
    isPress,
    SSH,
    password,
    handleChangeSSH,
    handleChangePassword,
    handleUpdate,
  ] = ChangeSSHHook();
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" تغير رمز التشفير "} />

          <form action="" className="form">
            <div className="mb-3">
              <label htmlFor="ssh" className="form-label">
               رمز التشفير الجديد (SSH) *
              </label>
              <input
                value={SSH}
                onChange={handleChangeSSH}
                type="text"
                className="form-control"
                id="ssh"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPasswordConf" className="form-label">
                تأكيد كلمه المرور *
              </label>
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                className="form-control"
                id="exampleInputPasswordConf"
              />
            </div>

            <button onClick={handleUpdate} className="btn special-btn start gap-1">
              تعديل
              {loading && isPress && (
                <Spinner variant="light" animation="border" />
              )}
            </button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default ChangeSSHContainer;
