import React from "react";
import favOn from "../../images/fav-on.png";
import favOff from "../../images/fav-off.png";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import AddMealToFavHook from "../../CustomHook/Fav/AddMealToFavHook";
import RemoveMealFromFavHook from "../../CustomHook/Fav/RemoveMealFromFavHook";
import UpdateMealInCartHook from "../../CustomHook/Cart/UpdateMealInCartHook";
import DeleteMealFromCartHook from "../../CustomHook/Cart/DeleteMealFromCartHook";

let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const MealCartComp = ({ meal, item }) => {
  const [handleAddMealToFav] = AddMealToFavHook();
  const [handleRemoveMealFromFav] = RemoveMealFromFavHook();
  const [updateLoading, updateIsPress, size, count, handleChangeSize, handleChangeCount, main] =
    UpdateMealInCartHook(item);

    const [deleteLoading, deleteIsPress, deleteMealFromCart] = DeleteMealFromCartHook()

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
        <div className="between">
          <div className="meal-title text-capitalize fw-bold fs-5">
            {meal.title}
          </div>
          <button onClick={()=> deleteMealFromCart(meal._id)} className="btn special-btn"> حذف </button>
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
          <select
            onChange={handleChangeSize}
            value={size}
            id="meal-sizes"
            className="form-control"
          >
            <option value="0"> اختر الحجم </option>
            {meal.size.length &&
              meal.size.map((size, index) => (
                <option key={index} value={size} className="text-capitalize">
                  {size}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="count-field"> الكمية </label>
          <div className="between gap-1 algin-items-start">
            <input
              value={count}
              onChange={handleChangeCount}
              id="count-field"
              type="number"
              className="form-control"
              placeholder="الكميه"
            />
            <button onClick={() => main(meal._id)} className="btn special-btn start gap-1">
              تعديل
              {updateLoading && updateIsPress && <Spinner variant="light" animation="border" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCartComp;
