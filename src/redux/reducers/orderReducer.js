import {
  CHANGE_ORDER_STATUS,
  CHANGE_USER_INFO,
  CREATE_CASH_ORDER,
  DELETE_ORDER,
  GET_ADMIN_ORDERS,
  GET_LOGGED_USER_ORDER,
} from "../type";

const initialState = {
  createCashOrder: [],
  getLoggedUserOrder: [],
  getAdminAllOrders: [],
  deleteOrder: [],
  changeOrderStatus: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CASH_ORDER:
      return {
        ...state,
        createCashOrder: action.payload,
      };
    case GET_LOGGED_USER_ORDER:
      return {
        ...state,
        getLoggedUserOrder: action.payload,
      };
    case GET_ADMIN_ORDERS:
      return {
        ...state,
        getAdminAllOrders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        deleteOrder: action.payload,
      };
    case CHANGE_ORDER_STATUS:
      return {
        ...state,
        changeOrderStatus: action.payload,
      };

    default:
      return state;
  }
};
