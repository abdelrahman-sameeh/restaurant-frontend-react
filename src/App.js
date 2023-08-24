import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import CartPage from "./pages/Cart/CartPage";
import MenuPage from "./pages/Utility/MenuPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyResetCodePage from "./pages/Auth/VerifyResetCodePage";
import SetNewPasswordPage from "./pages/Auth/SetNewPasswordPage";
import UserAddAddress from "./pages/User/UserAddAddressPage";
import UserAddresses from "./pages/User/UserAddressesPage";
import UserFavoritePage from "./pages/User/UserFavoritePage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import UserOrdersPage from "./pages/User/UserOrdersPage";
import AdminOrdersPage from "./pages/Admin/AdminOrdersPage";
import AddMealPage from "./pages/Meal/AddMealPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminSidebarComp from "./components/Admin/AdminSidebarComp";
import UserSidebarComp from "./components/User/UserSidebarComp";
import SpecificMealPage from "./pages/Meal/SpecificMealPage";
import UpdateUserInfoPage from "./pages/User/UpdateUserInfoPage";
import AddCouponPage from "./pages/Coupon/AddCouponPage";
import GetAllCouponsPage from "./pages/Coupon/GetAllCouponsPage";
import UpdateOneCouponPage from "./pages/Coupon/UpdateOneCouponPage";
import DeliveryOrdersPage from "./pages/Delivery/DeliveryOrdersPage";
import ScanOrderDeliveryPage from "./pages/Delivery/ScanOrderDeliveryPage";
import DeliverySidebarComp from "./components/Delivery/DeliverySidebarComp";

const App = () => {
  return (
    <div className="app" id="app">
      {/* <AdminSidebarComp />
      <UserSidebarComp /> */}
      <DeliverySidebarComp />
    

      <Routes>
        {/* not auth */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* all */}
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/meal/:id" element={<SpecificMealPage />} />

        {/* auth */}
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/verifyResetCode" element={<VerifyResetCodePage />} />
        <Route path="/setNewPassword" element={<SetNewPasswordPage />} />
        <Route path="/profile" element={<UserProfilePage />} />

        {/* user */}
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/user/orders" element={<UserOrdersPage />} />
        <Route path="/user/addAddress" element={<UserAddAddress />} />
        <Route path="/user/addresses" element={<UserAddresses />} />
        <Route path="/user/favorite" element={<UserFavoritePage />} />
        <Route path="/user/updateUserInfo" element={<UpdateUserInfoPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />

        {/* admin */}
        <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/addMeal" element={<AddMealPage />} />
        <Route path="/admin/addCoupon" element={<AddCouponPage />} />
        <Route path="/admin/getAllCoupons" element={<GetAllCouponsPage />} />
        <Route path="/admin/coupon/:id" element={<UpdateOneCouponPage />} />

        {/* delivery */}
        <Route path="/delivery/orders" element={<DeliveryOrdersPage />} />
        <Route path="/delivery/scanOrder" element={<ScanOrderDeliveryPage />} />


      </Routes>
    </div>
  );
};

export default App;
