import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfCategories } from "../../redux/actions/categoryAction";

const ChangeCategoryPaginationHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const getNumOfPageFromPagination = async (num) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfCategories(4, num));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Category.getListOfCategories);

  if(response && response.status===200){
    localStorage.categoryPagination = JSON.stringify(response.data.pagination)
  }

  return [loading, isPress, getNumOfPageFromPagination]

};

export default ChangeCategoryPaginationHook;
