import { ADD_CATEGORY, GET_ALL_CATEGORIES } from "../type";

const initialState = {
  addCategory: [],
  allCategories: []
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        addCategory: action.payload,
      };
      case GET_ALL_CATEGORIES:
        return {
          ...state,
          allCategories: action.payload,
        };
    default:
      return state;
  }
};
