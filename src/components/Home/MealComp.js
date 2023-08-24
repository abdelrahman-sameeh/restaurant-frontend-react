import React from "react";
import pizzaImg from "../../images/pizza-png-15.png";
import favOn from "../../images/fav-on.png";
import favOff from "../../images/fav-off.png";
import { Link } from "react-router-dom";

const MealComponent = ({ mealInfo }) => {
  return (
    <div
      className="meal flex-1 box start rounded p-2 gap-2"
      style={{  backgroundColor: "var(--main-color)", minWidth: '300px' }}
    >
      <div className="image flex-1"  style={{ minWidth: "150px", maxWidth: '200px' }} >
        <Link to='/meal/111'>
        <img
          className='w-100 h-100'
          src={pizzaImg}
          alt=""
        />
        </Link>
      </div>
      <div className="meal-info">
        {/* admin */}
        <div className="controls d-flex gap-1 justify-content-end">
          <Link to="/meal/update/123" className="btn special-btn">
            {" "}
            تعديل{" "}
          </Link>
          <div className="btn special-btn"> حذف </div>
        </div>

        <div className="meal-title text-capitalize fw-bold fs-5">
          Pizza with cheese
        </div>
        <div className="between my-2">
          <div
            style={{ color: "var(--price-color)" }}
            className="price fw-bold"
          >
            30$
          </div>
          <div className="fav">
            <img
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              src={favOn}
              alt=""
            />
            <img
              style={{ width: "31px", height: "34px", cursor: "pointer" }}
              src={favOff}
              alt=""
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="meal-sizes">اختر الحجم</label>
          <select id="meal-sizes" class="form-control">
            <option value="small">حجم صغير (Small)</option>
            <option value="medium">حجم متوسط (Medium)</option>
            <option value="large">حجم كبير (Large)</option>
          </select>
        </div>

        <div className="between gap-1 algin-items-start">
          <input type="number" className="form-control" placeholder="الكميه" />
          <button className="btn special-btn ">+</button>
        </div>
      </div>
    </div>
  );
};

export default MealComponent;
