import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListOfMealsCategory } from "../../redux/actions/mealActions";

const MealsInCategoryHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();

  const renderMealsInCategory = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfMealsCategory(`category=${id}`));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    renderMealsInCategory();
  }, []);

  const response = useSelector(state=>state.Meal.getListOfMealsCategory)

  let meals = [];
  if(response && response.status===200){
    meals = response.data.data
    localStorage.mealCategoryPagination = JSON.stringify(response.data.pagination)
  }

  return [loading, isPress, meals];
};

export default MealsInCategoryHook;
