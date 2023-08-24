import {
  faArrowRightFromBracket,
  faBookOpen,
  faCartShopping,
  faClipboard,
  faEnvelope,
  faGear,
  faHeart,
  faMoon,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NavbarAppComponent = () => {
  return (
    <div className="d-flex align-items-start flex-column gap-2 pt-5">
      <Link data-tooltip="تغير الوضع" className="icon mb-3">
        <FontAwesomeIcon icon={faMoon} />
      </Link>
      {/* user */}
      <Link data-tooltip="الرئيسية" to="/" className="icon active">
        <FontAwesomeIcon icon={faBookOpen} />
      </Link>
      <Link data-tooltip="المفضلة" to="/user/favorite" className="icon">
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <Link data-tooltip="السلة" to="/user/cart" className="icon">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
      <Link data-tooltip="الطلبات" to="/user/orders" className="icon">
        <FontAwesomeIcon icon={faClipboard} />
      </Link>


      <Link data-tooltip="الصفحه الشخصيه" to="/profile" className="icon">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link data-tooltip="تواصل معنا" to="/contactUs" className="icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link data-tooltip="تسجيل الخروج" to="/" className="icon">
        <FontAwesomeIcon
          style={{ transform: "rotate(180deg)" }}
          icon={faArrowRightFromBracket}
        />
      </Link>
    </div>
  );
};

export default NavbarAppComponent;
