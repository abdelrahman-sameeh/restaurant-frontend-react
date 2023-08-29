import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserFavorite } from "../../redux/actions/favoriteActions";

const UserFavoriteHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const getFavorite = async () => await dispatch(getLoggedUserFavorite());

  useEffect(() => {
    getFavorite();
  }, []);

  const response = useSelector((state) => state.Favorite.getLoggedUserFavorite);
  let favorites;
  if (response && response.status === 200) {
    favorites = response.data.favorites;
  }

  return [favorites];
};

export default UserFavoriteHook;
