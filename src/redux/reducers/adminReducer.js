import { ADD_NEW_ACCOUNT, GET_LIST_OF_USERS } from "../type";

const initialState = {
  createAccount: [],
  getListOfUsers: []
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ACCOUNT:
      return {
        ...state,
        createAccount: action.payload,
      };
    case GET_LIST_OF_USERS:
      return {
        ...state,
        getListOfUsers: action.payload,
      };
    default:
      return state;
  }
};
