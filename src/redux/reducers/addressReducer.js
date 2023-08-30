import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  GET_LOGGED_USER_ADDRESSES,
  GET_ONE_ADDRESS,
  UPDATE_ADDRESS,
} from "../type";

const initialState = {
  addAddress: [],
  getLoggedUserAddresses: [],
  deleteAddress: [],
  updateAddress: [],
  getOneAddress: []
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        addAddress: action.payload,
      };
    case GET_LOGGED_USER_ADDRESSES:
      return {
        ...state,
        getLoggedUserAddresses: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        updateAddress: action.payload,
      };
    case GET_ONE_ADDRESS:
      return {
        ...state,
        getOneAddress: action.payload,
      };
    default:
      return state;
  }
};
