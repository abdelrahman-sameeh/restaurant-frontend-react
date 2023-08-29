import React from "react";
import UserSidebarComp from "./UserSidebarComp";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import MealComponent from "../Home/MealComp";
import UserFavoriteHook from "../../CustomHook/User/UserFavoriteHook";

const UserFavoriteContainer = () => {

  const [favorites] = UserFavoriteHook()


  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"الوجبات المفضلة"} />
          <div className="start flex-wrap gap-2 pb-4 align-stretch ">
            {favorites && favorites.length ? (
              favorites.map((meal) => {
                return <MealComponent key={meal._id} meal={meal} />;
              })
            ) : (
              <h2 className="text-center fw-bold w-100">
                {" "}
                لم يتم اضافة اى وجبات للمفضلة{" "}
              </h2>
            )}
          </div>
        </div>
      </Row>
    </>
  );
};

export default UserFavoriteContainer;
