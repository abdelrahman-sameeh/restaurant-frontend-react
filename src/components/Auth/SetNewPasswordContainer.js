import React from "react";
import CurrentLocation from "../Utility/CurrentLocation";

const SetNewPasswordContainer = () => {
  return (
    <div className="container">
      <CurrentLocation current={"تغير كلمة المرور"} />
      <form
        className="p-3 rounded"
        style={{
          backgroundColor: "var(--secondary-color)",
          boxShadow: "var(--main-box-shadow)",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            كلمة المرور الجديدة
          </label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        <button type="submit" className="btn special-btn">
          حفظ
        </button>
      </form>
    </div>
  );
};

export default SetNewPasswordContainer;
