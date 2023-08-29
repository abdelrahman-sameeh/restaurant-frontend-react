import { useDeleteData } from "../../hook/useDeleteData";
import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateData } from "../../hook/useUpdateData";
import { ADD_COUPON, GET_ALL_COUPONS, GET_ONE_COUPON, UPDATE_ONE_COUPON, DELETE_ONE_COUPON } from "../type";

export const addCoupon = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/coupon", data);
    dispatch({
      type: ADD_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_COUPON,
      payload: err.response,
    });
  }
};

export const getAllCoupons = () => async (dispatch) => {
  try {
    const response = await useGetData("/api/v1/coupon");
    dispatch({
      type: GET_ALL_COUPONS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_COUPONS,
      payload: err.response,
    });
  }
};

export const getOneCoupon = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/coupon/${id}`);
    dispatch({
      type: GET_ONE_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_COUPON,
      payload: err.response,
    });
  }
};

export const updateOneCoupon = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/coupon/${id}`, data);
    dispatch({
      type: UPDATE_ONE_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ONE_COUPON,
      payload: err.response,
    });
  }
};


export const deleteOneCoupon = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/coupon/${id}`);
    dispatch({
      type: DELETE_ONE_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ONE_COUPON,
      payload: err.response,
    });
  }
};