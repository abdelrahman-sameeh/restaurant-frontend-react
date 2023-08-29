import React, { useEffect, useState } from "react";
import {
  deleteMealToFavorite,
  getLoggedUserFavorite,
} from "../../redux/actions/favoriteActions";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../utils/Notification/useNotification";
import { getListOfMeals } from "../../redux/actions/mealActions";
import { getLoggedUserCart } from "../../redux/actions/cartAction";

const RemoveMealFromFavHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleRemoveMealFromFav = async (meal) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteMealToFavorite(meal));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Favorite.deleteMealFromFav);
  const renderAllMeals = async () => await dispatch(getListOfMeals());
  const renderFavorite = async () => await dispatch(getLoggedUserFavorite());
  const renderCart = async () => await dispatch(getLoggedUserCart());

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderAllMeals();
        renderFavorite();
        renderCart();
        return notify("تم الحذف من المفضلة", "success");
      }
      if (response && response.status !== 200 && response.data) {
        return notify("حدث خطأ, حاول فى وقت لاحق", "error");
      }
    }
  }, [loading]);

  return [handleRemoveMealFromFav];
};

export default RemoveMealFromFavHook;
