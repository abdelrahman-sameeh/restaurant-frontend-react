import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfMeals } from "../../redux/actions/mealActions";

const GetListOfMealsHook = () => {

  const dispatch = useDispatch();
  const render = async () => {
    await dispatch(getListOfMeals());
  };

  useEffect(() => {
    render();
  }, []);

  const response = useSelector((state) => state.Meal.listOfMeals);

  let meals = [];
  if (response && response.data) {
    meals = response.data.data;
  }

  return [ meals];
};

export default GetListOfMealsHook;
