import { CHANGE_USER_INFO, CREATE_CASH_ORDER } from "../type";

const initialState = {
  createCashOrder: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CASH_ORDER:
      return {
        ...state,
        createCashOrder: action.payload,
      };
    default:
      return state;
  }
};
