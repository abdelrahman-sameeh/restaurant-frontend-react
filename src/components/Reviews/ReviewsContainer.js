import React from "react";
import ReviewComp from "./ReviewComp";
import GetListOfReviewsHook from "../../CustomHook/Review/GetListOfReviewsHook";
import SpinnerInBox from "../Utility/SpinnerInBox";
import PaginationComp from "../Utility/PaginationComp";
import ChangeReviewPaginationHook from "../../CustomHook/Review/ChangeReviewPaginationHook";

const ReviewsContainer = () => {
  const [loading, isPress, reviews] = GetListOfReviewsHook();

  const [paginationLoading, paginationIsPress, handleChangePagination] =
    ChangeReviewPaginationHook();



  let pagination =
    localStorage.reviewPagination && JSON.parse(localStorage.reviewPagination);

  return (
    <div className="position-relative">
      {(loading && isPress) || (paginationLoading, paginationIsPress) ? (
        <SpinnerInBox />
      ) : null}

      {reviews && reviews.length && !loading ? (
        reviews.map((review) => <ReviewComp key={review._id} review={review} />)
      ) : (
        <h2 className="text-center"> لا يوجد مراجعات لهذة الوجبة </h2>
      )}

      {pagination && pagination.numberOfPages > 1 ? (
        <PaginationComp
          pageCount={pagination.numberOfPages}
          onPress={handleChangePagination}
        />
      ) : null}
    </div>
  );
};

export default ReviewsContainer;
