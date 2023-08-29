import { useInsertData } from "../../hook/useInsertData";
import {
  CHANGE_FORGET_PASSWORD,
  CHANGE_PASSWORD,
  FORGET_PASSWORD,
  LOGIN,
  REGISTER,
  VERIFY_RESET_CODE,
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

export const changePassword = (data) => {
  return async (dispatch) => {
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
};
