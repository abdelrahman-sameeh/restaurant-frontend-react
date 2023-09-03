import React from "react";
import { Link } from "react-router-dom";

const CategoryComp = ({ category, categoryPage }) => {
  return (
    <Link
      to={`/categories/${category._id}`}
      className={`category center gap-1 btn  ${
        categoryPage && "category-page"
      }`}
      style={{
        color: 'var(--alt-color)',
        backgroundColor: "var(--main-color)",
        borderRadius: "50px",
        overflow: "hidden",
      }}
    >
      <div className="image" style={{ backgroundColor: "var(--icon-color)" }}>
        <img
          src={category.image}
          alt=""
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      <div className="category-title text-capitalize rounded px-2 py-1">
        {category.title}
      </div>
    </Link>
  );
};

export default CategoryComp;
