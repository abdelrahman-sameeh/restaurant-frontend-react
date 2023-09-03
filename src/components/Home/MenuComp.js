import React from "react";
import { Link } from "react-router-dom";
import pizza from "../../images/Pizza.jpg";
import GetListOfCategoriesHook from "../../CustomHook/Category/GetListOfCategoriesHook";
import SpinnerInBox from "../Utility/SpinnerInBox";
import CategoryComp from "../Category/CategoryComp";

const MenuComponent = () => {
  const [loading, isPress, categories] = GetListOfCategoriesHook();

  return (
    <div className="menu p-1 position-relative d-flex justify-content-between align-items-center flex-wrap gap-3 mt-3 mb-5">
      {loading && isPress ? <SpinnerInBox /> : null}
      <div className="title fw-bold text-capitalize"> قائمة الطعام </div>
      {/* menu categories */}
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
        {categories && categories.length
          ? categories.slice(0, 2).map((category) => (
              <CategoryComp key={category._id} category={category}  />
            ))
          : null}
      </div>
      <Link
        to="/categories"
        className="fw-bold"
        style={{ color: "var(--alt-color)" }}
      >
        {" "}
        عرض الكل{" "}
      </Link>
    </div>
  );
};

export default MenuComponent;
