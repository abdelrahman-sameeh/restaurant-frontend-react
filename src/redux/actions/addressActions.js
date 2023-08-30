import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useDeleteData } from "../../hook/useDeleteData";
import { useUpdateData } from "../../hook/useUpdateData";
import {
  ADD_ADDRESS,
  GET_LOGGED_USER_ADDRESSES,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  GET_ONE_ADDRESS,
} from "../type";

export const addAddress = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/address", data);
    dispatch({
      type: ADD_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_ADDRESS,
      payload: err.response,
    });
  }
};

export const getLoggedUserAddresses = () => async (dispatch) => {
  try {
    const response = await useGetData("/api/v1/userAddresses");
    dispatch({
      type: GET_LOGGED_USER_ADDRESSES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LOGGED_USER_ADDRESSES,
      payload: err.response,
    });
  }
};

export const deleteOneAddress = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/address/${id}`);
    dispatch({
      type: DELETE_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: err.response,
    });
  }
};

export const updateOneAddress = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/address/${id}`, data);
    dispatch({
      type: UPDATE_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: err.response,
    });
  }
};

export const getOneAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/address/${id}`);
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_ADDRESS,
      payload: err.response,
    });
  }
};
