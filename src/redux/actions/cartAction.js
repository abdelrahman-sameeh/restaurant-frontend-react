import { useDeleteData } from "../../hook/useDeleteData"
import { useGetData } from "../../hook/useGetData"
import { useInsertData } from "../../hook/useInsertData"
import { useUpdateData } from "../../hook/useUpdateData"
import { ADD_MEAL_TO_CART, DELETE_ONE_FROM_CART, GET_LOGGED_USER_CART, UPDATE_CART } from "../type"

export const addMealToCart = (data) => async (dispatch) => {
  try{
    const response = await useInsertData('/api/v1/cart', data)
    dispatch({
      type: ADD_MEAL_TO_CART,
      payload: response
    })
  }catch(err){
    dispatch({
      type: ADD_MEAL_TO_CART,
      payload: err.response
    })
  }
}

export const getLoggedUserCart = () => async (dispatch) => {
  try{
    const response = await useGetData('/api/v1/cart')
    dispatch({
      type: GET_LOGGED_USER_CART,
      payload: response
    })
  }catch(err){
    dispatch({
      type: GET_LOGGED_USER_CART,
      payload: err.response
    })
  }
}


export const updateCart = data => async(dispatch) => {
  try{
    const response = await useUpdateData('/api/v1/cart', data)
    dispatch({
      type: UPDATE_CART,
      payload: response
    })
  }catch(err){
    dispatch({
      type: UPDATE_CART,
      payload: err.response
    })
  }
}

export const deleteOneFromCart = id => async(dispatch) => {
  try{
    const response = await useDeleteData(`/api/v1/cart/${id}`)
    dispatch({
      type: DELETE_ONE_FROM_CART,
      payload: response
    })
  }catch(err){
    dispatch({
      type: DELETE_ONE_FROM_CART,
      payload: err.response
    })
  }
}