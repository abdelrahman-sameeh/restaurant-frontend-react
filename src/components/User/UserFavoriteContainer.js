import React from "react";
import UserSidebarComp from "./UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import MealComponent from "../Home/MealComp";

const UserFavoriteContainer = () => {
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"الوجبات المفضلة"} />
          <div className="start flex-wrap gap-2">
            <MealComponent />
            <MealComponent />
            <MealComponent />
            
          </div>  
        </div>
      </Row>
    </>
  );
};

export default UserFavoriteContainer;
