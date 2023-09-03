import React, { useState } from "react";
import { getListOfUsers } from "../../redux/actions/adminActions";
import { useDispatch } from "react-redux";

const ChangeUserPaginationHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch()

  let query = localStorage.filterUserQuery ? localStorage.filterUserQuery : '';

  const handleChangePagination = async (pageNum) => {
    localStorage.filterUsersPage = pageNum;

    query += `page=${pageNum}`;
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers(query));
    setLoading(false);
    setIsPress(false);
  };



  return [loading, isPress, handleChangePagination];
};

export default ChangeUserPaginationHook;
