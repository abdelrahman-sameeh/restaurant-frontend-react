import React from "react";
import UserSidebarComp from "./UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Link } from "react-router-dom";
import AddAddressHook from "../../CustomHook/User/AddAddressHook";
import { Spinner } from "react-bootstrap";
import UpdateAddressHook from "../../CustomHook/User/UpdateAddressHook";

const UserAddAddressContainer = () => {

  const [
    loading,
    isPress,
    alias,
    details,
    phone,
    city,
    postalCode,
    handleChangeAlias,
    handleChangeDetails,
    handleChangePhone,
    handleChangeCity,
    handleChangePostalCode,
    main
  ] = UpdateAddressHook()


  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <div className="row-app">
        <div className="container">
          <CurrentLocation current={"اضافة عنوان جديد"} />
          <Link to="/user/addresses" className="btn special-btn mb-2">
            العناوين الشخصيه
          </Link>
          <form action="">
            <div className="mt-3">
              <label> العنوان *</label>
              <input value={alias} onChange={handleChangeAlias} type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> المدينة *</label>
              <input value={city} onChange={handleChangeCity} type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> التفاصيل *</label>
              <input value={details} onChange={handleChangeDetails} type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> رقم الهاتف *</label>
              <input value={phone} onChange={handleChangePhone} type="text" className="form-control mt-1" />
            </div>
            <div className="mt-3">
              <label> الرقم البريدى *</label>
              <input value={postalCode} onChange={handleChangePostalCode} type="text" className="form-control mt-الرقم البريدى" />
            </div>
            <button onClick={main} className="btn special-btn mt-3 mb-2 start gap-1">
              تعديل
              {loading && isPress && <Spinner variant="light" animation="border" />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserAddAddressContainer;
