import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneAddress, getLoggedUserAddresses } from '../../redux/actions/addressActions';
import {notify} from '../../utils/Notification/useNotification'


const DeleteAddressHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();


  const deleteAddress = async(id) => {
    setLoading(true)
    setIsPress(true)
    await dispatch(deleteOneAddress(id))
    setLoading(false)
    setIsPress(false)
  }

  const response = useSelector(state=>state.Address.deleteAddress)
  const renderAddresses= async  ()=>await dispatch(getLoggedUserAddresses())

  useEffect(()=>{
    if(!loading){
      if(response.status===200){
        renderAddresses()
        return notify('تم حذف العنوان بنجاح', 'success')
      }
      if(response.status!==200 && response.data){
        return notify('حدث خطأ حاول فى وقت لاحق', 'error')
      }
    }
  }, [loading])

  return [loading, isPress, deleteAddress]

}

export default DeleteAddressHook