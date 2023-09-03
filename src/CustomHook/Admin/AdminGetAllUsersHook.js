import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfUsers } from "../../redux/actions/adminActions";

const AdminGetAllUsersHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const renderAllUsers = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    renderAllUsers();
  }, []);

  const response = useSelector((state) => state.Admin.getListOfUsers);


  let users = [];
  if (response && response.status === 200) {
    users = response.data.data;
    localStorage.userPagination = JSON.stringify(response.data.pagination);
  }

  return [loading, isPress, users];
};

export default AdminGetAllUsersHook;
