import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMealToFavorite } from "../../redux/actions/favoriteActions";
import { notify } from "../../utils/Notification/useNotification";
import {
  getListOfMeals,
  getListOfMealsCategory,
  getOneMeal,
} from "../../redux/actions/mealActions";
import { getLoggedUserFavorite } from "../../redux/actions/favoriteActions";
import { getLoggedUserCart } from "../../redux/actions/cartAction";

const AddMealToFavHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleAddMealToFav = async (meal) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(addMealToFavorite(meal));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Favorite.addMealToFav);
  const renderAllMeals = async () => await dispatch(getListOfMeals());
  const renderFavorite = async () => await dispatch(getLoggedUserFavorite());
  const renderCart = async () => await dispatch(getLoggedUserCart());

  const renderMealsCategory = async (_) =>
    await dispatch(
      getListOfMealsCategory(
        `page=${localStorage.mealCategoryPaginationNum}&category=${localStorage.mealCategory}`
      )
    );

  const renderSpecificMeal = async () =>
    await dispatch(getOneMeal(localStorage.specificMeal));

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        renderAllMeals();
        renderFavorite();
        renderCart();
        if (
          localStorage.mealCategoryPaginationNum &&
          localStorage.mealCategory
        ) {
          renderMealsCategory();
        }
        if (localStorage.specificMeal) {
          renderSpecificMeal();
        }

        notify("تم اضافة الوجبة الى المفضلة", "success");
      }
      if (
        response.status !== 200 &&
        response.data &&
        response.data.error &&
        response.data.error[0].msg === "Meal already exist in your favorites"
      ) {
        notify("الوجبة فى المفضلة بالفعل", "warn");
      }
    }
  }, [loading]);

  return [handleAddMealToFav];
};

export default AddMealToFavHook;
