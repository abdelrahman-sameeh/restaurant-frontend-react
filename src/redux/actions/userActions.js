const { useInsertData } = require("../../hook/useInsertData")
const { CHANGE_USER_INFO } = require("../type")

export const updateUserInfo = (data) => {
  return async(dispatch) => {
    try{
      const response = await useInsertData('/api/v1/updateUserInfo', data)
    dispatch({
      type: CHANGE_USER_INFO,
      payload: response
    })
    }catch(err){
      dispatch({
        type: CHANGE_USER_INFO,
        payload: err.response
      })
    }
  }
}