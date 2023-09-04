import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeAccount } from "../../redux/actions/authActions";
import { getListOfUsers } from "../../redux/actions/adminActions";
import { notify } from "../../utils/Notification/useNotification";

const ActivateAccountHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const handleActiveAccount = async (id) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(activeAccount(id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.Auth.activeAccount);

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
        return notify("تم تفعيل الحساب بنجاح", "success");
      }
    }
  }, [loading]);

  return [loading, isPress, handleActiveAccount];
};

export default ActivateAccountHook;
