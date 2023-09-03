import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListOfMealsCategory } from '../../redux/actions/mealActions';
import { useParams } from 'react-router-dom';

const MealsInCategoryChangePaginationHook = () => {

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const {id} = useParams()

  const handleChangePagination = async(pageNum) => {
    localStorage.mealCategoryPaginationNum = pageNum
    localStorage.mealCategory = id
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfMealsCategory(`category=${id}&page=${pageNum}`));
    setLoading(false);
    setIsPress(false);
  }

  const response = useSelector(state=> state.Meal.getListOfMealsCategory)

  if(response && response.status===200){
    localStorage.mealCategoryPagination = JSON.stringify(response.data.pagination)
  }


  return [loading, isPress, handleChangePagination]


}

export default MealsInCategoryChangePaginationHook