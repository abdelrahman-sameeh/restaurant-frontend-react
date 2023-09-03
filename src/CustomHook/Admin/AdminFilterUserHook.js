import React, { useEffect, useState } from "react";
import { getListOfUsers } from "../../redux/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";

const AdminFilterUserHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const handleChangeRole = (e) => {
    localStorage.removeItem('filterUserQuery')
    setRole(e.target.dataset.role);
  };

  const query = `role=${role}&`;

  if (role != "") localStorage.filterUserQuery = query;

  const renderFilterUsers = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers(query));
    setLoading(false);
    setIsPress(true);
  };
  const renderAllUsers = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    if (role != "") {
      renderFilterUsers();
    } else {
      renderAllUsers();
    }
  }, [role]);

  const response = useSelector((state) => state.Admin.getListOfUsers);
  if (response && response.status === 200) {
    localStorage.userPagination = JSON.stringify(response.data.pagination);
  }

  return [loading, isPress, handleChangeRole];
};

export default AdminFilterUserHook;
