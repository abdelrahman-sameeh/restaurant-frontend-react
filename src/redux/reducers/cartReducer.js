import {
  ADD_MEAL_TO_CART,
  DELETE_ONE_FROM_CART,
  GET_LOGGED_USER_CART,
  UPDATE_CART,
  APPLY_COUPON,
} from "../type";

const initialState = {
  addMealToCart: [],
  getLoggedUserCart: [],
  updateCart: [],
  deleteOneFromCart: [],
  applyCoupon: [  ],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEAL_TO_CART:
      return {
        ...state,
        addMealToCart: action.payload,
      };
    case GET_LOGGED_USER_CART:
      return {
        ...state,
        getLoggedUserCart: action.payload,
      };
    case UPDATE_CART:
      return {
        ...state,
        updateCart: action.payload,
      };
    case DELETE_ONE_FROM_CART:
      return {
        ...state,
        deleteOneFromCart: action.payload,
      };
    case APPLY_COUPON:
      return {
        ...state,
        applyCoupon: action.payload,
      };
    default:
      return state;
  }
};
