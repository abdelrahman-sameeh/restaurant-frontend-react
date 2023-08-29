import { useDeleteData } from "../../hook/useDeleteData";
import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { ADD_MEAL_TO_FAVORITE, DELETE_MEAL_TO_FAVORITE, GET_LOGGED_USER_FAVORITE } from "../type";

export const addMealToFavorite = (meal) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/favorite/${meal}`);
    dispatch({
      type: ADD_MEAL_TO_FAVORITE,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_MEAL_TO_FAVORITE,
      payload: err.response,
    });
  }
};

export const deleteMealToFavorite = (meal) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/favorite/${meal}`);
    dispatch({
      type: DELETE_MEAL_TO_FAVORITE,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_MEAL_TO_FAVORITE,
      payload: err.response,
    });
  }
};


export const getLoggedUserFavorite = () => async (dispatch)=> {
  try {
    const response = await useGetData(`/api/v1/favorite`);
    dispatch({
      type: GET_LOGGED_USER_FAVORITE,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LOGGED_USER_FAVORITE,
      payload: err.response,
    });
  }
}