import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Row } from "react-bootstrap";

const UpdateCouponContainer = () => {
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

            <button className="btn special-btn mt-3"> تعديل الكوبون </button>
          </form>

        </div>
      </Row>
    </>
  );
};

export default UpdateCouponContainer;