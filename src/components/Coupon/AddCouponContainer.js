import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import AddCouponHook from "../../CustomHook/Coupon/AddCouponHook";

const AddCouponContainer = () => {
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
  ] = AddCouponHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"اضافة كود خصم"} />

          <form action="">
            <div className="mt-3">
              <label className="mb-2" htmlFor="coupon-title">
                {" "}
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
              اضافة الكوبون
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

export default AddCouponContainer;
