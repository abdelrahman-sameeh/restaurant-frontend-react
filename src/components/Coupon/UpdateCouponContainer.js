import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Row, Spinner } from "react-bootstrap";
import UpdateCouponHook from "../../CustomHook/Coupon/UpdateCouponHook";

const UpdateCouponContainer = () => {
  const [
    loading,
    isPress,
    name,
    discount,
    expire,
    handleChangeDiscount,
    handleChangeExpire,
    handleChangeName,
    main,
  ] = UpdateCouponHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"تعديل كود الخصم (الكوبون)"} />

          <form action="">
            <div className="mt-3">
              <label className="mb-2" htmlFor="coupon-title">
                اسم كود الخصم (الكوبون){" "}
              </label>
              <input
                value={name}
                onChange={handleChangeName}
                id="coupon-title"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <label className="mb-2" htmlFor="coupon-discount">
                نسبة الخصم (ادخل قيمة من 1 الى 100)
              </label>
              <input
                value={discount}
                onChange={handleChangeDiscount}
                id="coupon-discount"
                type="number"
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <label className="mb-2" htmlFor="coupon-expire">
                ادخل تاريخ اكبر من تاريخ اليوم
              </label>
              <input
                value={expire}
                onChange={handleChangeExpire}
                id="coupon-expire"
                type="date"
                className="form-control"
              />
            </div>

            <button onClick={main} className="btn special-btn mt-3 start gap-1">
              تعديل الكوبون
              {loading && isPress ? (
                <Spinner variant="light" animation="border" />
              ) : (
                ""
              )}
            </button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default UpdateCouponContainer;
