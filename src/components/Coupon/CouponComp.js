import React from "react";
import { Link } from "react-router-dom";
import DeleteCouponHook from "../../CustomHook/Coupon/DeleteCouponHook";
import { Spinner } from "react-bootstrap";

const CouponComp = ({ coupon }) => {

  let expire = coupon ? new Date(coupon.expire).toLocaleDateString() : ''

  const [loading, isPress, deleteCoupon] = DeleteCouponHook()

  return (
    <>
      {coupon ? (
        <div
          style={{ backgroundColor: "var(--secondary-color)" }}
          className="coupon p-2 rounded mb-2"
        >
          <div className="controls end gap-1">
            <Link to={`/admin/coupon/${coupon._id}`} className="btn special-btn">
              تعديل
            </Link>
            <div onClick={()=>deleteCoupon(coupon._id)} className="btn special-btn start gap-1">حذف
            {
              loading && isPress ? <Spinner variant="light" animation="border" /> : ''
            }
            </div>
          </div>
          <div className="coupon-info">
            <div>
              <span className="fw-bold"> اسم الكوبون </span>: {coupon.name}
            </div>
            <div>
              <span className="fw-bold"> نسبة الخصم </span>: {coupon.discount}
            </div>
            <div>
              <span className="fw-bold"> تاريخ الانتهاء </span>: { expire }
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CouponComp;
