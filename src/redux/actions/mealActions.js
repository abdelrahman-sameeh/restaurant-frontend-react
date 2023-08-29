import { useInsertDataWithImage } from "../../hook/useInsertData";
import { useGetData } from "../../hook/useGetData";
import { ADD_MEAL, DELETE_ONE_MEAL, GET_LIST_OF_MEALS, GET_ONE_MEAL, UPDATE_ONE_MEAL } from "../type";
import { useDeleteData } from "../../hook/useDeleteData";
import { useUpdateDataWithImage } from "../../hook/useUpdateData";

export const addMeal = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/meals", data);
    dispatch({
      type: ADD_MEAL,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_MEAL,
      payload: err.response,
    });
  }
};

export const getListOfMeals =
  (queryString = "") =>
  async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/meals${queryString}`);
      dispatch({
        type: GET_LIST_OF_MEALS,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_OF_MEALS,
        payload: err.response,
      });
    }
  };

export const deleteOneMeal = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/meals/${id}`);
    dispatch({
      type: DELETE_ONE_MEAL,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ONE_MEAL,
      payload: err.response,
    });
  }
};


export const getOneMeal = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/meals/${id}`);
    dispatch({
      type: GET_ONE_MEAL,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_MEAL,
      payload: err.response,
    });
  }
};

export const updateOneMeal = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(`/api/v1/meals/${id}`, data);
    dispatch({
      type: UPDATE_ONE_MEAL,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ONE_MEAL,
      payload: err.response,
    });
  }
}