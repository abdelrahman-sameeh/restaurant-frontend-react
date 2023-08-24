import React from "react";
import { Link } from "react-router-dom";

const CouponComp = () => {
  return (
    <div
      style={{ backgroundColor: "var(--secondary-color)" }}
      className="coupon p-2 rounded mb-2"
    >
      <div className="controls end gap-1">
        <Link to='/admin/coupon/111' className="btn special-btn">تعديل</Link>
        <div className="btn special-btn">حذف</div>
      </div>
      <div className="coupon-info">
        <div>
          <span className="fw-bold"> اسم الكوبون </span>: {"habby aid"}
        </div>
        <div>
          <span className="fw-bold"> نسبة الخصم </span>: {"15%"}
        </div>
        <div>
          <span className="fw-bold"> تاريخ الانتهاء </span>: {"1-1-2002"}
        </div>
      </div>
    </div>
  );
};

export default CouponComp;
