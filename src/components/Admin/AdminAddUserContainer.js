import React from "react";
import CurrentLocation from "../Utility/CurrentLocation";
import AdminAddAccountHook from "../../CustomHook/Admin/AdminAddAccountHook";
import { Spinner } from "react-bootstrap";

const AdminAddUserContainer = () => {
  const [
    loading,
    isPress,
    name,
    email,
    role,
    SSH,
    password,
    handleChangeName,
    handleChangeEmail,
    handleChangeRole,
    handleChangeSSH,
    handleChangePassword,
    handleAddAccount,
  ] = AdminAddAccountHook();

  return (
    <div className="container">
      <CurrentLocation current={"تسجيل حساب جديد"} />
      <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            الاسم *
          </label>
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            البريد الالكترونى *
          </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail6" className="form-label">
            نوع الحساب *
          </label>
          <select
            value={role}
            onChange={handleChangeRole}
            className="form-select"
            id="exampleInputEmail6"
          >
            <option value="user"> حساب عادى </option>
            <option value="delivery"> ديلفرى </option>
            <option value="admin"> ادمن </option>
          </select>
        </div>

        {role === "delivery" && (
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              رمز التشفير (SSH) *
            </label>
            <input
              value={SSH}
              onChange={handleChangeSSH}
              type="password"
              className="form-control"
              id="exampleInputEmail3"
            />
          </div>  
        )}

        <div className="mb-3">
          <label htmlFor="exampleInputPasswordConf4" className="form-label">
            كلمه المرور *
          </label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            id="exampleInputPasswordConf4"
          />
        </div>   

        <button
          onClick={handleAddAccount}
          type="submit"
          className="btn special-btn start gap-1"
        >
          اضافة الحساب
          {loading && isPress && (
            <Spinner variant="warning" animation="border" />
          )}
        </button>
      </form>
    </div>  
  );
};

export default AdminAddUserContainer;
