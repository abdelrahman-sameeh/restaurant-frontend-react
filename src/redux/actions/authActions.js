import { useInsertData } from "../../hook/useInsertData";
import { useDeleteData } from "../../hook/useDeleteData";
import { useUpdateData } from "../../hook/useUpdateData";
import {
  CHANGE_FORGET_PASSWORD,
  CHANGE_PASSWORD,
  FORGET_PASSWORD,
  LOGIN,
  REGISTER,
  VERIFY_RESET_CODE,
  DELETE_ACCOUNT,
  ACTIVE_ACCOUNT,
} from "../type";

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await useInsertData("/api/v1/register", data);
      dispatch({
        type: REGISTER,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: REGISTER,
        payload: err.response,
      });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await useInsertData("/api/v1/login", data);
      dispatch({
        type: LOGIN,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: LOGIN,
        payload: err.response,
      });
    }
  };
};

export const forgetPassword = (data) => {
  return async (dispatch) => {
    try {
      const response = await useInsertData("/api/v1/forgetPassword", data);
      dispatch({
        type: FORGET_PASSWORD,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: FORGET_PASSWORD,
        payload: err.response,
      });
    }
  };
};

export const verifyResetCode = (data) => {
  return async (dispatch) => {
    try {
      const response = await useInsertData("/api/v1/verifyPassword", data);
      dispatch({
        type: VERIFY_RESET_CODE,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: VERIFY_RESET_CODE,
        payload: err.response,
      });
    }
  };
};

export const changeForgetPassword = (data) => {
  return async (dispatch) => {
    try {
      const response = await useInsertData(
        "/api/v1/changePasswordAfterReset",
        data
      );
      dispatch({
        type: CHANGE_FORGET_PASSWORD,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: CHANGE_FORGET_PASSWORD,
        payload: err.response,
      });
    }
  };
};

export const changePassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/changePassword", data);
    dispatch({
      type: CHANGE_PASSWORD,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CHANGE_PASSWORD,
      payload: err.response,
    });
  }
};

export const deleteAccount = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/user/${id}`);
    dispatch({
      type: DELETE_ACCOUNT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ACCOUNT,
      payload: err.response,
    });
  }
};

export const activeAccount = (id) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/activeAccount/${id}`);
    dispatch({
      type: ACTIVE_ACCOUNT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ACTIVE_ACCOUNT,
      payload: err.response,
    });
  }
};
