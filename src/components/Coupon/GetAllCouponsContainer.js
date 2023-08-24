import React from 'react'
import NavbarAppComponent from '../Utility/NavbarAppComp'
import { Row } from 'react-bootstrap'
import CurrentLocation from '../Utility/CurrentLocation'
import CouponComp from './CouponComp'

const GetAllCouponsContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"حميع الكوبونات"} />

          <CouponComp />
          <CouponComp />

        </div>
      </Row>
    </>
  )
}

export default GetAllCouponsContainer