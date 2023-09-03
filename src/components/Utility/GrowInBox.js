import React from "react";
import { Spinner } from "react-bootstrap";

const GrowInBox = () => {
  return (
    <div className="spinner-loading center rounded">
      <Spinner
        style={{ backgroundColor: "var(--alt-color)" }}
        animation="grow"
      />
    </div>
  );
};

export default GrowInBox;
