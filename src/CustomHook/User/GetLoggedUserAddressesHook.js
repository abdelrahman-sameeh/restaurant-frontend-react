import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserAddresses } from "../../redux/actions/addressActions";

const GetLoggedUserAddressesHook = () => {
  const dispatch = useDispatch();

  const renderAddresses = async () => {
    dispatch(getLoggedUserAddresses());
  };

  useEffect(() => {
    renderAddresses();
  }, []);
  

  const response = useSelector((state) => state.Address.getLoggedUserAddresses);

  let addresses = [];
  if (response.status === 200 && response.data) {
    addresses = response.data.data
  }



  return [ addresses];
};

export default GetLoggedUserAddressesHook;
