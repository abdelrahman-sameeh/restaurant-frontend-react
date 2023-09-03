import React from "react";
import { Link } from "react-router-dom";

const CurrentLocation = ({ current }) => {
  return (
    <div className="pt-4">
      <div
        className="rounded py-3 px-2 mb-3 fw-bold"
        style={{ background: "var(--secondary-color)" }}
      >
        <span>
          {" "}
          <Link to="/" style={{ color: "var(--main-text-color)" }}>
            الرئيسية
          </Link>{" "}
          / <span style={{ color: "var(--alt-color)" }}>{current}</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default CurrentLocation;
