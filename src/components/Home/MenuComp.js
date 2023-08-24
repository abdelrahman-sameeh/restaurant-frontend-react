import React from "react";
import { Link } from "react-router-dom";
import pizza from '../../images/Pizza.jpg'

const MenuComponent = () => {
  return (
    <div className="menu d-flex justify-content-between align-items-center flex-wrap gap-3 mt-3 mb-5"
    >
      <div className="title fw-bold text-capitalize"> قائمة الطعام </div>
      {/* menu categories */}
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
        <div className="category center gap-1"
          style={{backgroundColor:'var(--main-color)', borderRadius: '50px', overflow: 'hidden'}}
        >
          <div
            className="image"
            style={{ backgroundColor: "var(--icon-color)" }}
          >
            <img src={pizza} alt="" style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="category-title text-capitalize rounded px-2 py-1">بيرجر</div>
        </div>
        <div className="category center gap-1"
          style={{backgroundColor:'var(--main-color)', borderRadius: '50px', overflow: 'hidden'}}
        >
          <div
            className="image"
            style={{ backgroundColor: "var(--icon-color)" }}
          >
            <img src={pizza} alt="" style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="category-title text-capitalize rounded px-2 py-1">بيتزا</div>
        </div>

      </div>
      <Link to="/menu" className="fw-bold" style={{color: 'var(--alt-color)'}}> عرض الكل </Link>
    </div>
  );
};

export default MenuComponent;
