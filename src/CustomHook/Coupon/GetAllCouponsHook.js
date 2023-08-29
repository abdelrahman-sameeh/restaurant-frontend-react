import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoupons } from '../../redux/actions/couponAction'

const GetAllCouponsHook = () => {
  const dispatch = useDispatch()
  const renderALlCoupons = async () => {
    await dispatch(getAllCoupons())
  }
  useEffect(()=> {
    renderALlCoupons()
  }, [])

  const response = useSelector(state=>state.Coupon.getAllCoupons)
  let coupons =[]

  if(response && response.data && response.data.data){
    coupons = response.data.data
  }


  return coupons

}

export default GetAllCouponsHook