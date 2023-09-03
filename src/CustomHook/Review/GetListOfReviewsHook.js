import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListOfReviews } from "../../redux/actions/reviewActions";

const GetListOfReviewsHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const renderReviews = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfReviews(id));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    renderReviews();
  }, []);

  const response = useSelector((state) => state.Review.getListOfReviews);

  let reviews = response && response.status === 200 ? response.data.data : [];
  localStorage.reviewPagination =
    response && response.status === 200 ? JSON.stringify(response.data.pagination) : null;

  

  return [loading, isPress, reviews];
};

export default GetListOfReviewsHook;
