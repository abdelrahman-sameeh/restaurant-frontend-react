import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfMeals } from "../../redux/actions/mealActions";

const GetListOfMealsHook = () => {

  const [loading, setLoading] = useState(true)
  const [isPress, setIsPress] = useState(false)


  const dispatch = useDispatch();
  const render = async () => {
    setLoading(true)
    setIsPress(true)
    await dispatch(getListOfMeals());
    setLoading(false)
    setIsPress(false)
  };

  useEffect(() => {
    render();
  }, []);

  const response = useSelector((state) => state.Meal.listOfMeals);

  let meals = [];
  if (response && response.data) {
    meals = response.data.data;
  }

  return [loading, isPress ,meals];
};

export default GetListOfMealsHook;
