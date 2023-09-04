import {
  GET_ALL_DELIVERIES,
  GET_DELIVERY_ORDERS,
  SCAN_QR_CODE,
  SET_ORDER_TO_DELIVERY,
  UPDATE_SSH,
} from "../type";

const initialState = {
  getAllDeliveries: [],
  setOrderToDelivery: [],
  getDeliveryOrders: [],
  scanQrCode: [],
  updateSSH: [],
};
export const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DELIVERIES:
      return {
        ...state,
        getAllDeliveries: action.payload,
      };
    case SET_ORDER_TO_DELIVERY:
      return {
        ...state,
        setOrderToDelivery: action.payload,
      };
    case GET_DELIVERY_ORDERS:
      return {
        ...state,
        getDeliveryOrders: action.payload,
      };
    case SCAN_QR_CODE:
      return {
        ...state,
        scanQrCode: action.payload,
      };
    case UPDATE_SSH:
      return {
        ...state,
        updateSSH: action.payload,
      };
    default:
      return state;
  }
};
