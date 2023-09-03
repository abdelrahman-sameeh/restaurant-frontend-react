import React, { useEffect, useRef, useState } from "react";
import { debounce } from "./debounce";
import { useDispatch, useSelector } from "react-redux";
import { getListOfMeals } from "../../redux/actions/mealActions";

const SearchHook = () => {
  const [sort, setSort] = useState("0");
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const options = [
    { value: "0", label: "رتب حسب" },
    { value: "+price", label: "الاقل سعرا" },
    { value: "-price", label: "الاعلى سعرا" },
    { value: "-sold", label: "الاكثر بيعا" },
    { value: "-ratingAvg", label: "الاعلى تقيما" },
  ];

  const handleChangeDropDown = (option) => {
    setSort(option.value);
  };

  const handleChangeKeyword = (e) => {
    localStorage.removeItem("searchPage");
    setKeyword(e.target.value);
  };

  const changeKeyword = debounce(handleChangeKeyword);

  let queryString = "limit=4&";
  if (sort && sort != 0) {
    queryString += `sort=${sort}&`;
  }
  if (keyword && keyword != "") {
    queryString += `keyword=${keyword}&`;
  }

  localStorage.searchQuery = queryString;

  if (localStorage.searchPage) {
    queryString += `page=${localStorage.searchPage}&`;
  }


  const main = async () => {
    setLoading(true);
    setIsPress(true);
    dispatch(getListOfMeals(queryString));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    main();
  }, []);
  useEffect(() => {
    main();
  }, [keyword, sort]);

  const response = useSelector((state) => state.Meal.listOfMeals);

  let meals = [];
  if (response && response.status === 200) {
    meals = response.data.data;
    localStorage.searchPagination = JSON.stringify(response.data.pagination);
  }

  return [
    loading,
    isPress,
    options,
    sort,
    meals,
    handleChangeDropDown,
    changeKeyword,
  ];
};

export default SearchHook;
