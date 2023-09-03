import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import MealsInCategoryHook from "../../CustomHook/Meal/MealsInCategoryHook";
import MealComponent from "../Home/MealComp";
import PaginationComp from "../Utility/PaginationComp";
import MealsInCategoryChangePaginationHook from "../../CustomHook/Meal/MealsInCategoryChangePaginationHook";
import Loading from "../Utility/Loading";

const MealsInCategoryContainer = () => {
  const [renderMealLoading, renderMealIsPress, meals] = MealsInCategoryHook();

  const [loading, isPress, handleChangePagination] =
    MealsInCategoryChangePaginationHook();

  let pagination;
  if (localStorage.mealCategoryPagination) {
    pagination = JSON.parse(localStorage.mealCategoryPagination);
  }

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      {(loading && isPress) || (renderMealIsPress && renderMealLoading) ? (
        <Loading />
      ) : null}

      <Row className="row-app">
        <div className="container">
          <CurrentLocation
            current={` كل الوجبات فى التصنيف ${
              meals.length && meals[0].category.title
            } `}
          />

          {meals && meals.length ? (
            <div className="start align-items-stretch flex-wrap gap-2">
              {meals &&
                meals.length &&
                meals.map((meal) => (
                  <MealComponent key={meal._id} meal={meal} />
                ))}
            </div>
          ) : (
            <h2 className="fw-bold text-center">
              لا يوجد وجبات فى هذا التصنيف الان
            </h2>
          )}
        </div>

        {pagination && pagination.numberOfPages > 1 ? (
          <PaginationComp
            onPress={handleChangePagination}
            pageCount={pagination.numberOfPages}
          />
        ) : null}
      </Row>
    </>
  );
};

export default MealsInCategoryContainer;
