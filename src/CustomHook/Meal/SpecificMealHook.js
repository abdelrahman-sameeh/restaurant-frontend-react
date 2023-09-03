import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneMeal } from "../../redux/actions/mealActions";

const SpecificMealHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const renderOneMeal = async () => {
    // set id in localStorage to render this meal in favorite toggle
    localStorage.specificMeal = id
      
    setLoading(true);
    setIsPress(true);
    await dispatch(getOneMeal(id));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    renderOneMeal();
  }, []);

  const response = useSelector((state) => state.Meal.getOneMeal);

  let meal = {};
  if (response && response.status === 200) {
    meal = response.data.data;
  }

  return [loading, isPress, meal];
};

export default SpecificMealHook;
