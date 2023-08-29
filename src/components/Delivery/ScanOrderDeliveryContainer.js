import React, { useEffect, useState } from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScanOrderDeliveryContainer = () => {
  const [qrCodeResult, setQrCodeResult] = useState("");

  const run = () => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    const success = (result) => {
      scanner.clear();
      setQrCodeResult(result);
      localStorage.qrCodeResult = result
    };

    const error = (err) => {
      console.log(err);
    };
    scanner.render(success, error);
  }

  useEffect(() => {
    run()
  }, []);

  const handleRenderBarcode = () => {
    run()
  }

  return (
    <>
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
                <input id="ssh" className="form-control" type="password" />
              </div>
              <button className="btn special-btn mt-2"> تعديل حالة الطلب </button>
              <button onClick={handleRenderBarcode} className="btn special-btn mt-2 me-1"> مسح باركود اخر </button>
            </form>
          ) : null}
        </div>
      </Row>
    </>
  );
};

export default ScanOrderDeliveryContainer;
