import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { ADD_NEW_ACCOUNT, GET_LIST_OF_USERS } from "../type";

export const addNewAccount = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/createUser", data);
    dispatch({
      type: ADD_NEW_ACCOUNT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_NEW_ACCOUNT,
      payload: err.response,
    });
  }
};

export const getListOfUsers = (query='') => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/users?limit=10&${query}`);
    dispatch({
      type: GET_LIST_OF_USERS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LIST_OF_USERS,
      payload: err.response,
    });
  }
};
