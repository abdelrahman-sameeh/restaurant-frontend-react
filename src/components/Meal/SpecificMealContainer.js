import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row, Spinner } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import SpecificMealHook from "../../CustomHook/Meal/SpecificMealHook";
import MealComponent from "../Home/MealComp";
import ReactStars from "react-rating-stars-component";
import Loading from "../Utility/Loading";
import AddReviewHook from "../../CustomHook/Review/AddReviewHook";
import ReviewsContainer from "../Reviews/ReviewsContainer";

const SpecificMealContainer = () => {
  const [loading, isPress, meal] = SpecificMealHook();

  const [
    reviewLoading,
    reviewIsPress,
    rating,
    title,
    handleChangeTitle,
    ratingChanged,
    main,
  ] = AddReviewHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      {loading && isPress && <Loading />}

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" وجبة محددة "} />
          {meal && meal._id && (
            <div className="w-100">
              <MealComponent meal={meal} specific={true} />
            </div>
          )}

          <div className="rating mt-4 ">
            <h4 className="fw-bold "> اترك مراجعة </h4>

            <form action="">
              <div
                className="rotate end"
                style={{
                  transform: "rotateY(180deg)",
                }}
              >
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  classNames={"stars"}
                  size={24}
                  activeColor="#FF8A00"
                  value={rating}
                />
              </div>

              <textarea
                value={title}
                onChange={handleChangeTitle}
                className="form-control"
                rows="2"
                placeholder="اترك مراجعتك"
              ></textarea>
              <button onClick={main} className="btn mt-1 special-btn center">
                تعليق
                {reviewIsPress && reviewLoading && (
                  <Spinner variant="light" animation="grow" />
                )}
              </button>
            </form>

            {/* show reviews */}
            <ReviewsContainer />
          </div>
        </div>
      </Row>
    </>
  );
};

export default SpecificMealContainer;
