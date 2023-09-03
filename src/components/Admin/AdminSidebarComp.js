import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AdminSidebarComp = () => {
  return (
    <>
      <div
        className="gear"
        style={{backgroundColor: 'var(--secondary-color)', color:'var(--main-text-color)'}}
        
      >
        {" "}
        <FontAwesomeIcon icon={faGear} />{" "}
      </div>

      <div
        className="position-fixed p-2 left-sidebar"
        style={{ width: "200px" }}
      >
        <ul className="d-flex flex-column justify-content-center ">
          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/admin/orders">
              {" "}
              اداره جميع الطلبات{" "}
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/admin/addCategory">
              {" "}
              اضافة تصنيف جديدة{" "}
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/categories">
              كل التصنيفات
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/admin/addMeal">
              {" "}
              اضافة وجبة جديدة{" "}
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/menu">
              {" "}
              كل الوجبات{" "}
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/addAccount">
              اضافة حساب جديد
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/AllAccounts">
              كل المشتركين
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/admin/addCoupon">
              {" "}
              اضافة كود خصم{" "}
            </Link>
          </li>

          <li className="border-bottom">
            <Link
              className="btn  w-100 py-3 fw-bold "
              to="/admin/getAllCoupons"
            >
              جميع الكوبونات
            </Link>
          </li>

          <li className="border-bottom">
            <Link className="btn  w-100 py-3 fw-bold " to="/profile">
              {" "}
              الملف الشخصى{" "}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebarComp;
