import {
  ADD_MEAL_TO_FAVORITE,
  DELETE_MEAL_TO_FAVORITE,
  GET_LOGGED_USER_FAVORITE,
} from "../type";

const initialState = {
  addMealToFav: [],
  deleteMealFromFav: [],
  getLoggedUserFavorite: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEAL_TO_FAVORITE:
      return {
        ...state,
        addMealToFav: action.payload,
      };
    case DELETE_MEAL_TO_FAVORITE:
      return {
        ...state,
        deleteMealFromFav: action.payload,
      };
    case GET_LOGGED_USER_FAVORITE:
      return {
        ...state,
        getLoggedUserFavorite: action.payload,
      };
    default:
      return state;
  }
};
