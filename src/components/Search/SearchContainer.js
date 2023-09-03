import React from "react";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import SearchHook from "../../CustomHook/Search/SearchHook";
import Loading from "../Utility/Loading";
import MealComponent from "../Home/MealComp";
import PaginationComp from "../Utility/PaginationComp";
import ChangeSearchPaginationHook from "../../CustomHook/Search/ChangeSearchPaginationHook";

const SearchContainer = () => {
  const [
    loading,
    isPress,
    options,
    sort,
    meals,
    handleChangeDropDown,
    changeKeyword,
  ] = SearchHook();

  const pagination =
    localStorage.searchPagination && JSON.parse(localStorage.searchPagination);

  const [paginationLoading, paginationIsPress, handleChangePagination] =
    ChangeSearchPaginationHook();

  return (
    <>
      {loading && isPress && <Loading />}
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"ابحث عن وجبة محددة"} />

          <form action="" className="d-flex gap-1">
            <input
              autoFocus
              type="search"
              onChange={changeKeyword}
              placeholder="ادخل اسم الوجبة او وصفها"
              className="form-control"
            />
            <Dropdown
              options={options}
              onChange={handleChangeDropDown}
              value={sort}
              placeholder="Select an option"
              className="dropdown rounded"
            />
          </form>

          {/* show result */}
          <div className="position-relative start align-stretch flex-wrap gap-2 py-4">
            {meals && meals.length
              ? meals.map((meal) => {
                  return <MealComponent key={meal._id} meal={meal} />;
                })
              : !loading &&
                !meals.length && (
                  <h2 className="text-center fw-bold w-100">
                    {" "}
                    لا يوجد وجبات متاحة{" "}
                  </h2>
                )}
          </div>

          {pagination && pagination.numberOfPages > 1 && (
            <PaginationComp
              pageCount={pagination.numberOfPages}
              onPress={handleChangePagination}
            />
          )}
        </div>
      </Row>
    </>
  );
};

export default SearchContainer;
