import { useInsertData } from "../../hook/useInsertData"
import { CREATE_CASH_ORDER } from "../type";

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