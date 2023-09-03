import {
  ADD_MEAL,
  DELETE_ONE_MEAL,
  GET_LIST_OF_MEALS,
  GET_LIST_OF_MEALS_IN_CATEGORY,
  GET_ONE_MEAL,
  UPDATE_ONE_MEAL,
} from "../type";

const initialState = {
  addMeal: [],
  listOfMeals: [],
  deleteOneMeal: [],
  getOneMeal: [],
  updateOneMeal: [],
  getListOfMealsCategory: [],
};

export const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEAL:
      return {
        ...state,
        addMeal: action.payload,
      };
    case GET_LIST_OF_MEALS:
      return {
        ...state,
        listOfMeals: action.payload,
      };
    case DELETE_ONE_MEAL:
      return {
        ...state,
        deleteOneMeal: action.payload,
      };
    case GET_ONE_MEAL:
      return {
        ...state,
        getOneMeal: action.payload,
      };
    case UPDATE_ONE_MEAL:
      return {
        ...state,
        updateOneMeal: action.payload,
      };
    case GET_LIST_OF_MEALS_IN_CATEGORY:
      return {
        ...state,
        getListOfMealsCategory: action.payload,
      };
    default:
      return state;
  }
};
