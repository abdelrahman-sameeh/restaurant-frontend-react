import React, { useEffect, useState } from "react";
import { getListOfUsers } from "../../redux/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";

const AdminFilterUserHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();

  const handleChangeRole = (e) => {
    localStorage.removeItem("filterUserQuery");
    setRole(e.target.dataset.role);
    if (e.target.dataset.isActive == "false") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const query = `role=${role}&isActive=${isActive}&`;

  if (role != "") localStorage.filterUserQuery = query;
  if (role === "" && !isActive) localStorage.filterUserQuery = `isActive=false&`;

  const renderFilterUsers = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers(query));
    setLoading(false);
    setIsPress(true);
  };
  const renderAllUsers = async (query = "") => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfUsers(query));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    if (role != "" && isActive) {
      renderFilterUsers();
    } else if (role === "" && isActive) {
      renderAllUsers();
    } else if (role == "" && !isActive) {
      renderAllUsers(`isActive=false`);
    }
  }, [role, isActive]);

  const response = useSelector((state) => state.Admin.getListOfUsers);
  if (response && response.status === 200) {
    localStorage.userPagination = JSON.stringify(response.data.pagination);
  }

  return [loading, isPress, handleChangeRole];
};

export default AdminFilterUserHook;
