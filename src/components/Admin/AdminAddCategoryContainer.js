import React from "react";
import NavbarAppComponent from "../Utility/NavbarAppComp";
import { Row, Spinner } from "react-bootstrap";
import CurrentLocation from "../Utility/CurrentLocation";
import AddCategoryHook from "../../CustomHook/Category/AddCategoryHook";

const AdminAddCategoryContainer = () => {
  const [
    loading,
    isPress,
    image,
    title,
    selectedFile,
    handleClearSelected,
    handleChangeImage,
    handleChangeTitle,
    main,
  ] = AddCategoryHook();

  return (
    <div>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>

      <Row className="row-app">
        <div className="container">
          <CurrentLocation current={"اضافة تصنيف جديد"} />

          <form action="">
            <div className="mt-3">
              <label htmlFor="category-image">
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
                id="category-image"
                className="form-control d-none"
                type="file"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="category-name">اسم التصنيف</label>
              <input
                value={title}
                onChange={handleChangeTitle}
                id="category-name"
                className="form-control"
                type="text"
              />
            </div>
            <button onClick={main} className="btn special-btn mt-2 start gap-1">
              اضافة
              {loading && isPress && (
                <Spinner variant="light" animation="border" />
              )}
            </button>
          </form>
        </div>
      </Row>
    </div>
  );
};

export default AdminAddCategoryContainer;
