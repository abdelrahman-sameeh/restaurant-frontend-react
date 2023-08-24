import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";

const AddCouponContainer = () => {
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
              <input id="coupon-title" type="text" className="form-control" />
            </div>
            <div className="mt-3">
              <label className="mb-2" htmlFor="coupon-discount">
                نسبة الخصم (ادخل قيمة من 1 الى 100)
              </label>
              <input id="coupon-discount" type="number" className="form-control" />
            </div>
            <div className="mt-3">
              <label className="mb-2" htmlFor="coupon-expire">
                ادخل تاريخ اكبر من تاريخ اليوم
              </label>
              <input id="coupon-expire" type="date" className="form-control" />
            </div>

            <button className="btn special-btn mt-3"> اضافة الكوبون </button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default AddCouponContainer;
