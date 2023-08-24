import React from "react";

const AddressComp = ({ address }) => {
  return (
    <div
      className="p-3 mt-2 d-flex justify-content-between align-items-start rounded" 
      style={{ backgroundColor: "var(--secondary-color)" }}
    >
      <div className="address-info">
        <div>
          <label className="fw-bold" htmlFor="">العنوان :</label>
          <span> عنوان 1 </span>
        </div>
        <div>
          <label className="fw-bold" htmlFor=""> تفاصيل العنوان : </label>
          <span> هذه عباره عن تفاصيل العنوان هذه عباره عن تفاصيل العنوان هذه عباره عن تفاصيل العنوان هذه عباره عن تفاصيل العنوان  </span>
        </div>{" "}
        <div>
          <label className="fw-bold" htmlFor="">المدينة : </label>
          <span>القاهرة</span>
        </div>{" "}
        <div>
          <label className="fw-bold" htmlFor="">الهاتف : </label>
          <span>01556577857</span>
        </div>{" "}
        <div>
          <label className="fw-bold" htmlFor="">الرقم البريدى : </label>
          <span>123123</span>
        </div>
      </div>
      <div className="controls d-flex">
        <button className="btn special-btn">تعديل</button>
        <button className="btn special-btn me-1">حذف</button>
      </div>
    </div>
  );
};

export default AddressComp;
