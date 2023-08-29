import {
  ADD_COUPON,
  DELETE_ONE_COUPON,
  GET_ALL_COUPONS,
  GET_ONE_COUPON,
  UPDATE_ONE_COUPON,
} from "../type";

const initialState = {
  addCoupon: [],
  getAllCoupons: [],
  getOneCoupon: [],
  updateOneCoupon: [],
  deleteOneCoupon: [],
};
export const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUPON:
      return {
        ...state,
        addCoupon: action.payload,
      };
    case GET_ALL_COUPONS:
      return {
        ...state,
        getAllCoupons: action.payload,
      };
    case GET_ONE_COUPON:
      return {
        ...state,
        getOneCoupon: action.payload,
      };
    case UPDATE_ONE_COUPON:
      return {
        ...state,
        updateOneCoupon: action.payload,
      };
    case DELETE_ONE_COUPON:
      return {
        ...state,
        deleteOneCoupon: action.payload,
      };
    default:
      return state;
  }
};
