import React from "react";
import { Row, Spinner } from "react-bootstrap";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import UpdateUserInfoHook from "../../CustomHook/User/UpdateUserInfoHook";

const UpdateUserInfoContainer = () => {
  const [
    loading,
    isPress,
    name,
    email,
    phone,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    main,
  ] = UpdateUserInfoHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"تعديل المعلومات الشخصية"} />

          <form action="">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                الاسم
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
                تأكيد كلمه المرور *
              </label>
              <input
                value={password}
                onChange={handleChangePassword}
                type="password"
                className="form-control"
                id="exampleInputPassword"
              />
            </div>

            <button onClick={main} className="btn special-btn start gap-1">
              تعديل
              {loading && isPress && (
                <Spinner animation="border" variant="light" />
              )}
            </button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default UpdateUserInfoContainer;
