import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfCategories } from "../../redux/actions/categoryAction";

const GetListOfCategoriesHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(true);

  const dispatch = useDispatch();

  const renderListOfCategories = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfCategories(4));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    renderListOfCategories();
  }, []);



  const response = useSelector((state) => state.Category.getListOfCategories);

  let categories = [];
  if (response && response.data && response.data.data){
    categories = response.data.data;
    localStorage.categoryPagination = JSON.stringify(response.data.pagination)
  }


  return [loading, isPress, categories];
};

export default GetListOfCategoriesHook;
