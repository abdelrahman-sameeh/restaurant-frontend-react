import React from "react";
import UserSidebarComp from "../User/UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import ProfileHook from "../../CustomHook/Profile/ProfileHook";

const ProfileContainer = () => {
  const [user] = ProfileHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"الصفحة الشخصية"} />
          {user ? (
            <div
              className="user-info  py-3 px-2 rounded d-flex justify-content-between align-items-start flex-wrap"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              <div>
                <div className="name"> {user.name} </div>
                <div className="email"> {user.email} </div>
                <div className="phone"> {user.phone} </div>
              </div>
              <Link to="/updateUserInfo" className="btn special-btn">
                تعديل
              </Link>
            </div>
          ) : (
            <h2 className="text-center fw-bold">
              {" "}
              لم يتم تسجيل الدخول من فضلك سجل الدخول{" "}
            </h2>
          )}
          {user && (
            <div className="d-flex mt-3 gap-1 flex-wrap">
              {user.role === "user" && (
                <>
                  <Link to="/user/addAddress" className="btn special-btn">
                    اضافة عنوان
                  </Link>
                  <Link to="/user/addresses" className="btn special-btn">
                    العناوين الشخصية
                  </Link>
                </>
              )}

              {user.role === "delivery" && (
                <Link to="/changeSSH" className="btn special-btn">
                  تغير رمز التشفير (SSH)
                </Link>
              )}
              <Link to="/changePassword" className="btn special-btn">
                تغير كلمة المرور
              </Link>
            </div>
          )}
        </div>
      </Row>
    </>
  );
};

export default ProfileContainer;
