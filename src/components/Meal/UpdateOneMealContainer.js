import React from "react";
import { Row, Spinner } from "react-bootstrap";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import CurrentLocation from "../Utility/CurrentLocation";
import UpdateMealHook from "../../CustomHook/Meal/UpdateMealHook";

const UpdateOneMealContainer = () => {
  const [
    loading,
    isPress,
    image,
    selectedFile,
    title,
    details,
    sizes,
    category,
    allCategories,
    price,
    handleChangeImage,
    handleChangeTitle,
    handleChangeDetails,
    handleChangeSize,
    handleChangeCategory,
    handleChangePrice,
    handleDeleteSize,
    handleClearSelected,
    main,
  ] = UpdateMealHook();

  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={" اضافة وجبة جديدة "} />

          <form action="">
            <div className="mt-3">
              <label htmlFor="meal-image">
                <img
                  src={image}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  alt=""
                />
              </label>
              {selectedFile && (
                <span
                  onClick={handleClearSelected}
                  className="btn special-btn me-2 px-2"
                >
                  x
                </span>
              )}
              <input
                onChange={handleChangeImage}
                id="meal-image"
                className="form-control d-none"
                type="file"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="meal-title">اسم الوجبة</label>
              <input
                value={title}
                onChange={handleChangeTitle}
                id="meal-title"
                className="form-control"
                type="text"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="meal-details">وصف الوجبة</label>
              <input
                value={details}
                onChange={handleChangeDetails}
                id="meal-details"
                className="form-control"
                type="text"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="meal-sizes">الاحجام المتاحة</label>
              <select
                onChange={handleChangeSize}
                id="meal-sizes"
                className="form-control"
              >
                <option value="0"> حدد الاحجام المتاحة </option>

                <option value="small">حجم صغير (Small)</option>
                <option value="medium">حجم متوسط (Medium)</option>
                <option value="large">حجم كبير (Large)</option>
              </select>
            </div>

            {sizes && sizes.length ?
              <div className="sizes mt-1">
                (
                {sizes.map((size, index) => {
                  return (
                    <React.Fragment key={index}>
                      <span
                        onClick={() => handleDeleteSize(size)}
                        style={{ cursor: "pointer" }}
                        className="mx-1 size"
                      >
                        {size}
                      </span>
                      {/* add pipeline between sizes */}
                      {index < sizes.length - 1 && " | "}
                    </React.Fragment>
                  );
                })}
                )
              </div> : ''
            }

            <div className="mt-3">
              <label htmlFor="meal-category"> اختر تصنيف </label>
              <select
                value={category}
                onChange={handleChangeCategory}
                id="meal-category"
                className="form-control"
              >
                <option value="0"> اختر تصنيف </option>
                {allCategories &&
                  allCategories.map((category) => {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="meal-price">السعر</label>
              <input
                value={price}
                onChange={handleChangePrice}
                id="meal-price"
                className="form-control"
                type="number"
              />
            </div>
            <button onClick={main} className="btn special-btn mt-2 start gap-1">
              تعديل
              {loading && isPress && (
                <Spinner variant="light" animation="border" />
              )}
            </button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default UpdateOneMealContainer;
