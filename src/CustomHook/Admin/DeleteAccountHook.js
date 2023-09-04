import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount } from "../../redux/actions/authActions";
import { notify } from "../../utils/Notification/useNotification";
import { getListOfUsers } from "../../redux/actions/adminActions";

const DeleteAccountHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteAccount = async (id) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteAccount(id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Auth.deleteAccount);

  let query = "";
  if (localStorage.filterUserQuery) query = localStorage.filterUserQuery;
  if (localStorage.filterUsersPage) {
    query += `page=${localStorage.filterUsersPage}&`;
  }

  const renderFilterUsers = async () => {
    await dispatch(getListOfUsers(query));
  };

  useEffect(() => {
    if (!loading) {
      if (response && response.status === 200) {
        renderFilterUsers();
        return notify("تم الغاء تفعيل الحساب", "success");
      }
    }
  }, [loading]);

  return [loading, isPress, handleDeleteAccount];
};

export default DeleteAccountHook;
