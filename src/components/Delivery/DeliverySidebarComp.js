import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const DeliverySidebarComp = () => {
  return (
    <div className="position-fixed p-2 user-sidebar left-sidebar" style={{width: '200px'}}>
    <div
      className="position-absolute gear"
      style={{ right: "-50px", cursor: "pointer" }}
    >
      {" "}
      <FontAwesomeIcon icon={faGear} />{" "}
    </div>

    <ul className="d-flex flex-column justify-content-center ">
      <li className="border-bottom">
        <Link className="btn w-100 py-3 fw-bold " to="/delivery/orders">
          جميع الطلبات
        </Link>
      </li>
      <li className="border-bottom">
        <Link className="btn w-100 py-3 fw-bold " to="/delivery/scanOrder">
          مسح باركود
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default DeliverySidebarComp