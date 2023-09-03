import { useDeleteData } from "../../hook/useDeleteData";
import { useGetData } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData"
import { useUpdateData } from "../../hook/useUpdateData";
import { CREATE_CASH_ORDER, GET_LOGGED_USER_ORDER , GET_ADMIN_ORDERS, DELETE_ORDER, CHANGE_ORDER_STATUS} from "../type";

export const createCashOrder = data => async dispatch => {
  try{
    const response = await useInsertData('/api/v1/createCashOrder', data);
    dispatch({
      type: CREATE_CASH_ORDER,
      payload: response
    })
  }catch(err){
    dispatch({
      type: CREATE_CASH_ORDER,
      payload: err.response
    })
  }
}

export const getLoggedUserOrder = (query='') => async dispatch => {
  try{
    const response = await useGetData(`/api/v1/userOrders?${query}`);
    dispatch({
      type: GET_LOGGED_USER_ORDER,
      payload: response
    })
  }catch(err){
    dispatch({
      type: GET_LOGGED_USER_ORDER,
      payload: err.response
    })
  }
} 

export const getAdminAllOrders = (query='limit=2') => async dispatch => {
  try{
    const response = await useGetData(`/api/v1/order?${query}`);
    dispatch({
      type: GET_ADMIN_ORDERS,
      payload: response
    })
  }catch(err){
    dispatch({
      type: GET_ADMIN_ORDERS,
      payload: err.response
    })
  }
} 


export const deleteOrder =(id) => async dispatch => {
  try{
    const response = await useDeleteData(`/api/v1/order/${id}`);
    dispatch({
      type: DELETE_ORDER,
      payload: response
    })
  }catch(err){
    dispatch({
      type: DELETE_ORDER,
      payload: err.response
    })
  }
} 


export const changeOrderStatus = (id, data) => async dispatch => {
  try{
    const response = await useUpdateData(`/api/v1/order/${id}`, data);
    dispatch({
      type: CHANGE_ORDER_STATUS,
      payload: response
    })
  }catch(err){
    dispatch({
      type: CHANGE_ORDER_STATUS,
      payload: err.response
    })
  }
}


