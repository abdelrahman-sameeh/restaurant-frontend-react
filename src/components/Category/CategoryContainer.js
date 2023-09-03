import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import CategoryComp from "./CategoryComp";
import GetListOfCategoriesHook from "../../CustomHook/Category/GetListOfCategoriesHook";
import PaginationComp from "../Utility/PaginationComp";
import { useDispatch, useSelector } from "react-redux";
import { getListOfCategories } from "../../redux/actions/categoryAction";
import ChangeCategoryPaginationHook from "../../CustomHook/Category/ChangeCategoryPaginationHook";
import Loading from "../Utility/Loading";

const CategoryContainer = () => {
  const [loading, isPress, categories] = GetListOfCategoriesHook();

  const [paginationLoading, paginationIsPress, getNumOfPageFromPagination] =
    ChangeCategoryPaginationHook();

  let pagination;
  if (localStorage.categoryPagination) {
    pagination = JSON.parse(localStorage.categoryPagination);
  }

  return (
    <>
      {(loading && isPress) || (paginationIsPress && paginationLoading) ? (
        <Loading />
      ) : null}

      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"كل التصنيفات"} />

          {/* menu categories */}
          <div className="start flex-wrap gap-2">
            {categories && categories.length
              ? categories.map((category) => (
                  <CategoryComp
                    key={category._id}
                    category={category}
                    categoryPage={true}
                  />
                ))
              : null}
          </div>

          {pagination && pagination.numberOfPages > 1 ? (
            <PaginationComp
              onPress={getNumOfPageFromPagination}
              pageCount={pagination.numberOfPages}
            />
          ) : null}
        </div>
      </Row>
    </>
  );
};

export default CategoryContainer;
