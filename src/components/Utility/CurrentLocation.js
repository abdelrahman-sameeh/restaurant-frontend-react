import React from "react";
import { Link } from "react-router-dom";

const CurrentLocation = ({ current }) => {
  return (
    <div className="mt-3 rounded py-3 px-2 mb-3 fw-bold" style={{ background: "var(--secondary-color)" }}>
      <span >
        {" "}
        <Link to="/" style={{color:'var(--main-text-color)'}} >الرئيسية</Link> / <span style={{color:'var(--alt-color)'}}>{current}</span> {" "}
      </span>
    </div>
  );
};

export default CurrentLocation;
