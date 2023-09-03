import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DeleteReviewHook from "../../CustomHook/Review/DeleteReviewHook";
import { Spinner } from "react-bootstrap";

const ReviewComp = ({ review }) => {
  const [loading, isPress, handleDeleteReview] = DeleteReviewHook();

  const user = localStorage.user && JSON.parse(localStorage.user);

  return (
    <div className="review gap-2">
      <div className="between">
        <div className="start gap-2">
          <div className="avatar text-capitalize fw-bold">
            {review ? review.user.name[0] : "U"}
          </div>
          <div className="name fw-bold">{review.user.name}</div>
        </div>

        {review &&
        review._id &&
        user &&
        (review.user._id == user._id || user.role === "admin") ? (
          <div className="controls d-flex gap-1">
            <div
              onClick={() => handleDeleteReview(review._id)}
              className="btn special-btn start gap-1"
            >
              حذف
              {loading && isPress && (
                <Spinner
                  style={{ backgroundColor: "var(--alt-color)" }}
                  animation="grow"
                />
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div style={{fontSize: '16px'}} className="start gap-2 align-items-start">
        <div style={{ color: "var(--alt-color)" }} className="rating d-flex align-items-center">
          {review && review._id ? review.rating : null}{" "}
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div style={{color: 'var(--main-text-50)'}} className="title"> {review && review.title} </div>
      </div>
    </div>
  );
};

export default ReviewComp;
