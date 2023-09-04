import React, { useEffect, useState } from "react";
import { notify } from "../../utils/Notification/useNotification";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addOneReview,
  getListOfReviews,
} from "../../redux/actions/reviewActions";

const AddReviewHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const ratingChanged = (num) => {
    setRating(num);
  };
  const handleChangeTitle = (e) => setTitle(e.target.value);

  const main = async (e) => {
    e.preventDefault();
    // validation
    if (!rating) {
      return notify("اختر تقيم", "warn");
    }

    if (!title) {
      return notify("اكتب التعليق", "warn");
    }

    if (title.length < 3) {
      return notify("عنوان المراجعة صغير ,اختر عنوان اكبر", "warn");
    }

    const data = {
      rating,
      title,
    };

    setLoading(true);
    setIsPress(true);
    await dispatch(addOneReview(id, data));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Review.addOneReview);

  const renderReview = async () => await dispatch(getListOfReviews(id));

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 201) {
        setTitle('')
        renderReview();
        return notify("تم اضافة المراجعة بنجاح", "success");
      }
      if (
        response &&
        response.data &&
        response.data.error &&
        response.data.error[0].msg === "User mustn't have more than one review"
      ) {
        return notify("لا يمكن ترك اكثر من مراجعة", "error");
      }
      if (
        response.data &&
        response.data.message.startsWith("you have no permission")
      ) {
        return notify("غير مسموع لك بترك مراجعة", "error");
      }

      if (
        response.status===401 
      ) {
        return notify("قم بتسجيل الدخول اولا", "error");
      }
    }
  }, [loading]);

  return [
    loading,
    isPress,
    rating,
    title,
    handleChangeTitle,
    ratingChanged,
    main,
  ];
};

export default AddReviewHook;
