import { useGetData } from "../../hook/useGetData";
import { useInsertDataWithImage } from "../../hook/useInsertData";
import {
  ADD_CATEGORY,
  GET_ALL_CATEGORIES,
  GET_LIST_OF_CATEGORIES,
} from "../type";

export const addCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/category", data);
    dispatch({
      type: ADD_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_CATEGORY,
      payload: err.response,
    });
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    const response = await useGetData("/api/v1/category");
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: err.response,
    });
  }
};

export const getListOfCategories =
  (limit = "", page = 1) =>
  async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/category?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_LIST_OF_CATEGORIES,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_OF_CATEGORIES,
        payload: err.response,
      });
    }
  };
