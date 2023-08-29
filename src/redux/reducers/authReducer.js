import {
  CHANGE_FORGET_PASSWORD,
  CHANGE_PASSWORD,
  FORGET_PASSWORD,
  LOGIN,
  REGISTER,
  VERIFY_RESET_CODE,
} from "../type";

const initialState = {
  register: [],
  login: [],
  forgetPassword: [],
  verifyResetCode: [],
  changeForgetPassword: [],
  changePassword: [],
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };
    case VERIFY_RESET_CODE:
      return {
        ...state,
        verifyResetCode: action.payload,
      };
    case CHANGE_FORGET_PASSWORD:
      return {
        ...state,
        changeForgetPassword: action.payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        changePassword: action.payload,
      };
    default:
      return state;
  }
};
