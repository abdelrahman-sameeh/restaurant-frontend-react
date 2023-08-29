import React from "react";
import MealComponent from "./MealComp";
import GetListOfMealsHook from "../../CustomHook/Home/GetListOfMealsHook";

const MealContainer = () => {
  const [ listOfMeals] = GetListOfMealsHook();

  return (
    <div className="start align-stretch flex-wrap gap-2 pb-4" >
      {(listOfMeals && listOfMeals.length) ?
        listOfMeals.map((meal) => {
          return <MealComponent key={meal._id} meal={meal} />;
        }): <h2 className="text-center fw-bold w-100" > لا يوجد وجبات متاحة </h2>
      }
    </div>
  );
};

export default MealContainer;
