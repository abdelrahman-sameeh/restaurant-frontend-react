import React from 'react'
import NavbarAppComponent from '../Utility/NavbarAppComp'
import { Row } from 'react-bootstrap'
import CurrentLocation from '../Utility/CurrentLocation'

const ScanOrderDeliveryContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" مسح باركود "} />

              
        </div>
      </Row>
    </>
  )
}

export default ScanOrderDeliveryContainer