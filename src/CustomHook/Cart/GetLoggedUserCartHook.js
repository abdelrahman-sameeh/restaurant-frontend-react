import React, { useEffect } from "react";
import { getLoggedUserCart } from "../../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const GetLoggedUserCartHook = () => {

  const dispatch  = useDispatch()

  const renderUserCart = async (_) => dispatch(getLoggedUserCart());

  useEffect(() => {
    renderUserCart();
  }, []);

  const response = useSelector((state) => state.Cart.getLoggedUserCart);
  let cartItems, total, totalAfterDiscount;
  
  if(response && response.data && response.data.cartItems){
    cartItems = response.data.cartItems
    total = response.data.total
  }


  if(response && response.data && response.data.totalAfterDiscount){
    totalAfterDiscount = response.data.totalAfterDiscount
  }



  return [cartItems, total, totalAfterDiscount];
};

export default GetLoggedUserCartHook;
