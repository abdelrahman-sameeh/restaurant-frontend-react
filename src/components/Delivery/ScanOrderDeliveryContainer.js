import React, { useEffect, useState } from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import RenderQReaderHook from "../../CustomHook/Delivery/RenderQReaderHook";
import Loading from "../Utility/Loading";

const ScanOrderDeliveryContainer = () => {

  const [
    loading,
    isPress,
    qrCodeResult,
    SSH,
    handleChangeSSH,
    handleRenderBarcode,
    updateOrderStatus,
  ] = RenderQReaderHook()

  

  return (
    <>
    {
      loading && isPress && <Loading />
    }
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" مسح باركود "} />

          <div id="reader" width="600px"></div>

          {qrCodeResult ? (
            <form action="" className="mt-3">
              <div className="mt-3">
                <label htmlFor="ssh"> ادخل SSH الخاص بك </label>
                <input value={SSH} onChange={handleChangeSSH} id="ssh" className="form-control" type="password" />
              </div>
              <button onClick={updateOrderStatus} className="btn special-btn mt-2"> تعديل حالة الطلب </button>
              <button onClick={handleRenderBarcode} className="btn special-btn mt-2 me-1"> مسح باركود اخر </button>
            </form>
          ) : null}
        </div>
      </Row>
    </>
  );
};

export default ScanOrderDeliveryContainer;
