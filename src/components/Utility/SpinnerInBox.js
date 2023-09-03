import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerInBox = () => {
  return (
    <div className="spinner-loading center rounded">
      <Spinner variant="warning" animation="border" />
    </div>
  );
};

export default SpinnerInBox;
