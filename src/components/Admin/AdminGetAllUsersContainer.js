import React, { useState } from "react";
import AdminGetAllUsersHook from "../../CustomHook/Admin/AdminGetAllUsersHook";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row, Spinner } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import Loading from "../Utility/Loading";
import PaginationComp from "../Utility/PaginationComp";
import AdminFilterUserHook from "../../CustomHook/Admin/AdminFilterUserHook";
import ChangeUserPaginationHook from "../../CustomHook/Admin/ChangeUserPaginationHook";
import DeleteAccountHook from "../../CustomHook/Admin/DeleteAccountHook";
import ActivateAccountHook from "../../CustomHook/Admin/ActivateAccountHook";

const roles = {
  user: "مستخدم",
  delivery: "ديلفيرى",
  admin: "مسؤول",
};

const AdminGetAllUsersContainer = () => {
  const [loading, isPress, users] = AdminGetAllUsersHook();
  const [filterLoading, filterIsPress, handleChangeRole] =
    AdminFilterUserHook();

  const [paginationLoading, paginationIsPress, handleChangePagination] =
    ChangeUserPaginationHook();

  const [deleteLoading, deleteIsPress, handleDeleteAccount] =
    DeleteAccountHook();

  const [activeLoading, activeIsPress, handleActiveAccount] =
    ActivateAccountHook();

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

          {(loading && isPress) ||
          (filterLoading && filterIsPress) ||
          (paginationLoading && paginationIsPress) ||
          (deleteLoading && deleteIsPress) ||
          (activeLoading && activeIsPress) ? (
            <Loading />
          ) : (
            ""
          )}

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
              className="btn special-btn radius-0 border-left"
            >
              المسؤلين
            </div>
            <div
              data-role=""
              data-is-active={false}
              onClick={handleChangeRole}
              className="btn special-btn radius-0 rounded-left "
            >
              الحسابات غير المفعلة
            </div>
          </div>

          {users && users.length ? (
            <table
              className={`table ${
                localStorage.mode === "dark" && "table-dark"
              }`}
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
                          {user && user.isActive ? (
                            <button
                              onClick={() => handleDeleteAccount(user._id)}
                              className="btn special-btn start gap-1"
                            >
                              الغاء تفعيل الحساب
                            </button>
                          ) : (
                            <button
                              onClick={() => handleActiveAccount(user._id)}
                              className="btn special-btn start gap-1"
                            >
                              تفعيل الحساب
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          ) : !loading ? (
            <h2 className="text-center fw-bold"> لا يوجد حسابات </h2>
          ) : null}

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
