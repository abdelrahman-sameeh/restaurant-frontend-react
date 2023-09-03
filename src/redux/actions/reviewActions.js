import { useInsertData } from "../../hook/useInsertData";
import { useGetData } from "../../hook/useGetData";
import { useDeleteData } from "../../hook/useDeleteData";
import { ADD_ONE_REVIEW, GET_LIST_OF_REVIEWS, DELETE_ONE_REVIEW } from "../type";

export const addOneReview = (id, data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/meal/${id}/review`, data);
    dispatch({
      type: ADD_ONE_REVIEW,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_ONE_REVIEW,
      payload: err.response,
    });
  }
};

export const getListOfReviews =
  (id, page = 1) =>
  async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/meal/${id}/review?limit=4&page=${page}`
      );
      dispatch({
        type: GET_LIST_OF_REVIEWS,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_OF_REVIEWS,
        payload: err.response,
      });
    }
  };

export const deleteOneReview = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/review/${id}`);
    dispatch({
      type: DELETE_ONE_REVIEW,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ONE_REVIEW,
      payload: err.response,
    });
  }
};
