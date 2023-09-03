import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListOfReviews } from "../../redux/actions/reviewActions";

const ChangeReviewPaginationHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleChangePagination = async (num) => {
    localStorage.reviewPage = num;
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfReviews(id, num));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Review.getListOfReviews);

  localStorage.reviewPagination =
    response && response.status === 200
      ? JSON.stringify(response.data.pagination)
      : null;

  return [loading, isPress, handleChangePagination];
};

export default ChangeReviewPaginationHook;
