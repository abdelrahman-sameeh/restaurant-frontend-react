import {
  ACTIVE_ACCOUNT,
  CHANGE_FORGET_PASSWORD,
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
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
  deleteAccount: [],
  activeAccount: [],
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
    case DELETE_ACCOUNT:
      return {
        ...state,
        deleteAccount: action.payload,
      };
    case ACTIVE_ACCOUNT:
      return {
        ...state,
        activeAccount: action.payload,
      };
    default:
      return state;
  }
};
