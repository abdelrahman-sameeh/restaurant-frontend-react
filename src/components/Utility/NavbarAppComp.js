import {
  faArrowRightFromBracket,
  faBookOpen,
  faCartShopping,
  faClipboard,
  faEnvelope,
  faHeart,
  faHome,
  faMoon,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NavbarAppComponent = () => {
  let user;
  if (localStorage.user) user = JSON.parse(localStorage.user);

  return (
    <div className="d-flex align-items-start flex-column gap-2 pt-5">
      <Link data-tooltip="تغير الوضع" className="icon change-mode">
        <FontAwesomeIcon icon={faMoon} />
      </Link>

      <Link data-tooltip="الرئيسية" to="/" className="icon">
        <FontAwesomeIcon icon={faHome} />
      </Link>

      <Link data-tooltip="التصنيفات" to="/categories" className="icon">
        <FontAwesomeIcon icon={faBookOpen} />
      </Link>

      <Link data-tooltip="قايمة الطعام" to="/menu" className="icon">
        <FontAwesomeIcon icon={faSearch} />
      </Link>

      {/* for admin */}
      {user && user.role === "admin" && (
        <Link data-tooltip="ادارة الطلبات" to="/admin/orders" className="icon">
          <FontAwesomeIcon icon={faClipboard} />
        </Link>
      )}

      {/* for delivery */}
      {user && user.role === "delivery" && (
        <Link
          data-tooltip="ادارة الطلبات"
          to="/delivery/orders"
          className="icon"
        >
          <FontAwesomeIcon icon={faClipboard} />
        </Link>
      )}

      {/* for user */}
      {user && user.role === "user" && (
        <>
          <Link data-tooltip="المفضلة" to="/user/favorite" className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link data-tooltip="السلة" to="/user/cart" className="icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link data-tooltip="الطلبات" to="/user/orders" className="icon">
            <FontAwesomeIcon icon={faClipboard} />
          </Link>
          <Link data-tooltip="تواصل معنا" to="/contactUs" className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </>
      )}

      {user && (
        <>
          <Link data-tooltip="الصفحه الشخصيه" to="/profile" className="icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link data-tooltip="تسجيل الخروج" to="/" className="icon logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </Link>
        </>
      )}

      {!user && (
        <Link data-tooltip="تسجيل الدخول" to="/login" className="icon">
          <FontAwesomeIcon
            style={{ transform: "rotate(180deg)" }}
            icon={faArrowRightFromBracket}
          />
        </Link>
      )}
    </div>
  );
};

export default NavbarAppComponent;
