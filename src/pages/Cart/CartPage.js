import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import CurrentLocation from "../../components/Utility/CurrentLocation";
import NavbarAppComponent from "../../components/Utility/NavbarAppComp";
import GetLoggedUserCartHook from "../../CustomHook/Cart/GetLoggedUserCartHook";
import MealCartComp from "../../components/Cart/MealCartComp";
import ApplyCouponHook from "../../CustomHook/Cart/ApplyCouponHook";
import { Link } from "react-router-dom";
import GetLoggedUserAddressesHook from "../../CustomHook/User/GetLoggedUserAddressesHook";
import CreateCashOrderHook from "../../CustomHook/Order/CreateCashOrderHook";

const CartPage = () => {
  // logged user cart
  const [cartItems, total, totalAfterDiscount] = GetLoggedUserCartHook();

  

  // logged user addresses
  const [addresses] = GetLoggedUserAddressesHook();

  // apply coupon feature
  const [
    couponLoading,
    couponIsPress,
    coupon,
    handleChangeCoupon,
    applyCouponFeature,
  ] = ApplyCouponHook();

  // add order hook
  const [loading, isPress, currentAddress, handleChangeAddress, handleAddOrder] = CreateCashOrderHook();


  
  return (
    <>
      <div className="navbar-app">
        <NavbarAppComponent />
      </div>
      <div className="row-app ">
        <div className="container">
          <CurrentLocation current={"السلة"} />
          {
            (cartItems && cartItems.length)?
          <Row className="gap-3">
            {/* add to orders */}
            <Col lg="12" md="12" sm="12" className="p-0">
              <div
                className="px-3 py-3 rounded"
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <div className="d-flex mb-2 gap-2">
                  <input
                    value={coupon}
                    onChange={handleChangeCoupon}
                    className="form-control"
                    style={{ fontSize: "14px" }}
                    type="text"
                    placeholder="ادخل كود الخصم"
                    />
                  <button
                    onClick={applyCouponFeature}
                    style={{ padding: "0px 7px", fontSize: "16px" }}
                    className="btn special-btn"
                  >
                    تطبيق
                    {couponLoading && couponIsPress && (
                      <Spinner variant="light" animation="border" />
                    )}
                  </button>
                </div>
                {total && !totalAfterDiscount ? (
                  <div className="start gap-2 fw-bold mb-2">
                    <span>السعر الكلى</span>
                    <span style={{ color: "var(--price-color)" }}>
                      {total} EGY{" "}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {totalAfterDiscount ? (
                  <>
                    <div className="start gap-2 fw-bold mb-2 ">
                      <span>السعر قبل الخصم</span>
                      <span style={{ textDecoration: "line-through" }}>
                        <span style={{ color: "var(--price-color)" }}>
                          {total} EGY{" "}
                        </span>
                      </span>
                    </div>
                    <div className="start gap-2 fw-bold mb-2">
                      <span>السعر بعد الخصم</span>
                      <span style={{ color: "var(--price-color)" }}>
                        {" "}
                        {totalAfterDiscount} EGY{" "}
                      </span>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="my-2 ">
                    <select onChange={handleChangeAddress} value={currentAddress} className="form-control" name="" id="addresses">
                      <option value="0"> اختر عنوان </option>
                      {/* addresses */}
                      {addresses &&
                        addresses.map((address) => (
                          <option key={address._id} value={address._id}>
                            {" "}
                            {address.alias} - {address.city} - {address.phone}{" "}
                          </option>
                        ))}
                    </select>
                    <Link
                      to="/user/addAddress"
                      className="btn special-btn mt-2"
                    >
                      {" "}
                      اضافة عنوان جديد{" "}
                    </Link>
                  </div>

                  <button
                    onClick={handleAddOrder}
                    style={{ padding: "4px 7px", fontSize: "16px" }}
                    className="btn special-btn"
                  >
                    طلب الان
                  </button>
                </form>
              </div>
            </Col>
            {/* meals */}
            <Col lg="12" md="12" sm="12" className="p-0">
              <div className="start flex-wrap gap-2 align-stretch">
                {cartItems && cartItems.length
                  ? cartItems.map((item) => (
                    <MealCartComp
                        key={item._id}
                        item={item}
                        meal={item.product}
                      />
                    ))
                  : ""}
              </div>
            </Col>
          </Row> : <h2 className="text center fw-bold">
            لا يوجد وجبات فى السلة
          </h2>
      }
        </div>
      </div>
    </>
  );
};

export default CartPage;
