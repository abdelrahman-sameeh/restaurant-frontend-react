import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteOneReview,
  getListOfReviews,
} from "../../redux/actions/reviewActions";

import { notify } from "../../utils/Notification/useNotification";

const DeleteReviewHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const mealId = useParams().id;

  const dispatch = useDispatch();

  const handleDeleteReview = async (id) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteOneReview(id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Review.deleteOneReview);

  console.log(response);

  const page = localStorage.reviewPage || 1;
  const renderReview = async () =>
    await dispatch(getListOfReviews(mealId, page));

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderReview();
        return notify("تم حذف المراجعة بنجاح", "success");
      }
      if (
        response &&
        response.data &&
        response.data.error &&
        response.data.error.length &&
        response.data.error[0].msg == "This review not belong to this user"
      ) {
        return notify("لا يمكنك حذف هذة المراجعة", "error");
      }
    }
  }, [loading]);

  return [loading, isPress, handleDeleteReview];
};

export default DeleteReviewHook;
