import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import CouponComp from "./CouponComp";
import GetAllCouponsHook from "../../CustomHook/Coupon/GetAllCouponsHook";

const GetAllCouponsContainer = () => {
  const coupons = GetAllCouponsHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"حميع الكوبونات"} />
          {
            coupons && coupons.length ? 
            coupons.map(coupon=><CouponComp key={coupon._id} coupon={coupon} />)
            : <h1 className="text-center fw-bold"> لا يوجد كوبونات خصم </h1>
          }
          
          <CouponComp />
        </div>
      </Row>
    </>
  );
};

export default GetAllCouponsContainer;
