import React from "react";
import DeleteAddressHook from "../../CustomHook/User/DeleteAddressHook";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddressComp = ({ address }) => {
  const [loading, isPress, deleteAddress] = DeleteAddressHook();

  return (
    <div
      className="p-3 mt-2 d-flex justify-content-between align-items-start rounded"
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <div className="address-info">
        <div>
          <span className="fw-bold">العنوان :</span>
          <span> {address.alias} </span>
        </div>
        <div>
          <span className="fw-bold"> تفاصيل العنوان : </span>
          <span> {address.details} </span>
        </div>{" "}
        <div>
          <span className="fw-bold">المدينة : </span>
          <span> {address.city} </span>
        </div>{" "}
        <div>
          <span className="fw-bold">الهاتف : </span>
          <span> {address.phone} </span>
        </div>{" "}
        <div>
          <span className="fw-bold">الرقم البريدى : </span>
          <span> {address.postalCode} </span>
        </div>
      </div>
      <div className="controls d-flex">
        <Link to={`/user/updateAddress/${address._id}`} className="btn special-btn">تعديل</Link>
        <button onClick={()=>deleteAddress(address._id)} className="btn special-btn me-1 start gap-1">
          حذف
          {loading && isPress && <Spinner variant="light" animation="border" />}
        </button>
      </div>
    </div>
  );
};

export default AddressComp;
