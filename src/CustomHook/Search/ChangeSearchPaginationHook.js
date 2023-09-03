import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfMeals } from "../../redux/actions/mealActions";

const ChangeSearchPaginationHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();

  let query = localStorage.searchQuery;

  query += `page=${pageNum}`;



  const handleChangePagination = (num) => {
    setPageNum(num);
    localStorage.searchPage = num
  };

  const main = async () => {
    setLoading(true);
    setIsPress(true);
    dispatch(getListOfMeals(query));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    main();
  }, [pageNum]);

  const response = useSelector((state) => state.Meal.listOfMeals);

  if (response && response.status === 200) {
    localStorage.searchPagination = JSON.stringify(response.data.pagination);
  }

  return [loading, isPress, handleChangePagination];
};

export default ChangeSearchPaginationHook;
