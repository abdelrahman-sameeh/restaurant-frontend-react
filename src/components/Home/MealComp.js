import React from "react";
import pizzaImg from "../../images/pizza-png-15.png";
import favOn from "../../images/fav-on.png";
import favOff from "../../images/fav-off.png";
import { Link } from "react-router-dom";
import DeleteMealHook from "../../CustomHook/Meal/DeleteMealHook";
import { Spinner } from "react-bootstrap";
import AddMealToFavHook from "../../CustomHook/Fav/AddMealToFavHook";
import RemoveMealFromFavHook from "../../CustomHook/Fav/RemoveMealFromFavHook";
import AddMealToCartHook from "../../CustomHook/Cart/AddMealToCartHook";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const MealComponent = ({ meal }) => {
  const [loading, isPress, deleteMeal] = DeleteMealHook();
  const [handleAddMealToFav] = AddMealToFavHook();
  const [handleRemoveMealFromFav] = RemoveMealFromFavHook();
  const [size, count, handleChangeSize, handleChangeCount, main] = AddMealToCartHook()

  return (
    <div
      className="meal flex-1 box start rounded p-2 gap-2"
      style={{
        backgroundColor: "var(--main-color)",
        minWidth: "285px",
        maxWidth: "515px",
      }}
    >
      <div
        className="image flex-1"
        style={{ minWidth: "150px", maxWidth: "200px" }}
      >
        <Link to={`/meal/${meal._id}`}>
          <img className="w-100 h-100" src={meal.image} alt="" />
        </Link>
      </div>
      <div className="meal-info">
        {/* admin */}
        {user && user.role === "admin" ? (
          <div className="controls d-flex gap-1 justify-content-end">
            <Link to={`/meal/update/${meal._id}`} className="btn special-btn">
              {" "}
              تعديل{" "}
            </Link>
            <div
              onClick={() => deleteMeal(meal._id)}
              className="btn special-btn start gap-1"
            >
              حذف
              {loading && isPress && (
                <Spinner variant="light" animation="border" />
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="meal-title text-capitalize fw-bold fs-5">
          {meal.title}
        </div>
        <div className="between my-2">
          <div
            style={{ color: "var(--price-color)" }}
            className="price fw-bold"
          >
            EGY {meal.price}
          </div>
          {user && user.role === "user" && (
            <div className="fav">
              {meal && meal.favorites.includes(user._id) ? (
                <img
                  onClick={() => handleRemoveMealFromFav(meal._id)}
                  style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  src={favOn}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => handleAddMealToFav(meal._id)}
                  style={{ width: "31px", height: "34px", cursor: "pointer" }}
                  src={favOff}
                  alt=""
                />
              )}
            </div>
          )}
        </div>

        <div className="mb-2">
          <label htmlFor="meal-sizes">اختر الحجم</label>
          <select onChange={handleChangeSize} defaultValue={size} id="meal-sizes" className="form-control">
            <option value="0"> اختر الحجم </option>
            {meal.size.length &&
              meal.size.map((size, index) => (
                <option key={index} value={size} className="text-capitalize">
                  {size}
                </option>
              ))}
          </select>
        </div>

        <div className="between gap-1 algin-items-start">
          <input value={count} onChange={handleChangeCount} type="number" className="form-control" placeholder="الكميه" />
          <button onClick={()=>main(meal._id)} className="btn special-btn ">+</button>
        </div>
      </div>
    </div>
  );
};

export default MealComponent;
