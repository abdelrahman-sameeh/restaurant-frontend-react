import React from "react";
import UserSidebarComp from "./UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import { Row, Spinner } from "react-bootstrap";
import AddressComp from "./AddressComp";
import { Link } from "react-router-dom";
import GetLoggedUserAddressesHook from "../../CustomHook/User/GetLoggedUserAddressesHook";



const UserAddressesContainer = () => {

  const [ addresses] = GetLoggedUserAddressesHook()



  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"العناوين الشخصية"} />
          <Link to='/user/addAddress' className="btn special-btn">
            اضافة عنوان جديد
          </Link>

          {
            addresses && addresses.length ? 
            addresses.map(address=> (<AddressComp key={address._id} address={address} />) )
            : <h2 className="text-center mt-2 fw-bold">  قم بانشاء اول عنوان </h2>
          }



        </div>
      </Row>
    </>
  );
};

export default UserAddressesContainer;
