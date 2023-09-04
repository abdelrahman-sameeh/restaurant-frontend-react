import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateData } from "../../hook/useUpdateData";
import {
  GET_ALL_DELIVERIES,
  SET_ORDER_TO_DELIVERY,
  GET_DELIVERY_ORDERS,
  SCAN_QR_CODE,
  UPDATE_SSH,
} from "../type";

export const getAllDeliveries = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/delivery/getAllUserDeliveries`);
    dispatch({
      type: GET_ALL_DELIVERIES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_DELIVERIES,
      payload: err.response,
    });
  }
};

export const setOrderToUserDelivery = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/delivery/addOrderToDelivery`,
      data
    );
    dispatch({
      type: SET_ORDER_TO_DELIVERY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: SET_ORDER_TO_DELIVERY,
      payload: err.response,
    });
  }
};

export const getDeliveryOrders =
  (query = "") =>
  async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/delivery/getDeliveryOrders?limit=3&${query}`
      );
      dispatch({
        type: GET_DELIVERY_ORDERS,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GET_DELIVERY_ORDERS,
        payload: err.response,
      });
    }
  };

export const scanQrCode = (id, data) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/delivery/scanQRcodeOrder/${id}`,
      data
    );
    dispatch({
      type: SCAN_QR_CODE,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: SCAN_QR_CODE,
      payload: err.response,
    });
  }
};

export const updateSSH = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/delivery/${id}`, data);
    dispatch({
      type: UPDATE_SSH,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_SSH,
      payload: err.response,
    });
  }
};
