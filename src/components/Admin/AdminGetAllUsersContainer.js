import React, { useState } from "react";
import AdminGetAllUsersHook from "../../CustomHook/Admin/AdminGetAllUsersHook";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import Loading from "../Utility/Loading";
import PaginationComp from "../Utility/PaginationComp";
import AdminFilterUserHook from "../../CustomHook/Admin/AdminFilterUserHook";
import ChangeUserPaginationHook from "../../CustomHook/Admin/ChangeUserPaginationHook";

const roles = {
  user: "مستخدم",
  delivery: "ديلفيرى",
  admin: "مسؤول",
};

const AdminGetAllUsersContainer = () => {
  const [loading, isPress, users] = AdminGetAllUsersHook();
  const [filterLoading, filterIsPress, handleChangeRole] =
    AdminFilterUserHook();


    const [paginationLoading, paginationIsPress, handleChangePagination] = ChangeUserPaginationHook()

  

  let pagination;
  if (localStorage.userPagination) {
    pagination = JSON.parse(localStorage.userPagination);
  }

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"كل المشتركين"} />

          {loading && isPress ? <Loading /> : ""}

          {/* code  */}

          <div className="filter mb-2">
            <div
              data-role=""
              onClick={handleChangeRole}
              className="btn special-btn radius-0 border-left rounded-right"
            >
              الكل
            </div>
            <div
              data-role="user"
              onClick={handleChangeRole}
              className="btn special-btn radius-0 border-left "
            >
              المستخدمين
            </div>
            <div
              data-role="delivery"
              onClick={handleChangeRole}
              className="btn special-btn radius-0 border-left "
            >
              الديليفرى
            </div>
            <div
              data-role="admin"
              onClick={handleChangeRole}
              className="btn special-btn radius-0 rounded-left "
            >
              المسؤلين
            </div>
          </div>

          <table
            className={`table ${localStorage.mode === "dark" && "table-dark"}`}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">الاسم</th>
                <th scope="col">الايميل</th>
                <th scope="col">الصلاحية</th>
                <th scope="col">التحكم</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length
                ? users.map((user, index) => (
                    <tr key={user._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name} </td>
                      <td> {user.email} </td>
                      <td> {roles[user.role]} </td>
                      <td>
                        <div className="btn special-btn"> حذف </div>{" "}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          {pagination && pagination.numberOfPages > 1 && (
            <PaginationComp
              pageCount={pagination.numberOfPages}
              onPress={handleChangePagination}
            />
          )}
        </div>
      </Row>
    </>
  );
};

export default AdminGetAllUsersContainer;
