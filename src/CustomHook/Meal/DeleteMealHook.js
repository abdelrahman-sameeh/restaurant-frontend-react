import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneMeal, getListOfMeals } from "../../redux/actions/mealActions";
import { notify } from "../../utils/Notification/useNotification";
import { renderMatches } from "react-router-dom";

const DeleteMealHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const deleteMeal = async (id) => {
    // sweet alert
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteOneMeal(id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Meal.deleteOneMeal);


  // to render all meals after delete one
  const renderMeals = async (_) => await dispatch(getListOfMeals());

  useEffect(() => {
    if (!loading) {
      if (response.status === 200) {
        renderMeals();
        notify("تم الحذف بنجاح", "success");
      }

      if (
        response.status !== 200 &&
        response.data &&
        response.data.message.startsWith("no Meal matches")
      ) {
        notify("تم حذف الوجبة مؤخرا", "error");
      }
    }
  }, [loading]);

  return [loading, isPress, deleteMeal];
};

export default DeleteMealHook;
