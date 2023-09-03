import {
  ADD_ONE_REVIEW,
  DELETE_ONE_REVIEW,
  GET_LIST_OF_REVIEWS,
} from "../type";

const initialState = {
  addOneReview: [],
  getListOfReviews: [],
  deleteOneReview: []
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE_REVIEW:
      return {
        ...state,
        addOneReview: action.payload,
      };
    case GET_LIST_OF_REVIEWS:
      return {
        ...state,
        getListOfReviews: action.payload,
      };
    case DELETE_ONE_REVIEW:
      return {
        ...state,
        deleteOneReview: action.payload,
      };
    default:
      return state;
  }
};
