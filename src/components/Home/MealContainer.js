import React from "react";
import MealComponent from "./MealComp";
import GetListOfMealsHook from "../../CustomHook/Home/GetListOfMealsHook";
import SpinnerInBox from "../Utility/SpinnerInBox";

const MealContainer = () => {
  const [loading, isPress, listOfMeals] = GetListOfMealsHook();

  return (
    <div className="position-relative start align-stretch flex-wrap gap-2 pb-4">
      {loading && isPress ? <SpinnerInBox /> : null}

      {listOfMeals && listOfMeals.length
        ? listOfMeals.slice(0, 2).map((meal) => {
            return <MealComponent key={meal._id} meal={meal} />;
          })
        : !loading &&
          !listOfMeals.length && (
            <h2 className="text-center fw-bold w-100"> لا يوجد وجبات متاحة </h2>
          )}
    </div>
  );
};

export default MealContainer;
