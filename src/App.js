import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import CartPage from "./pages/Cart/CartPage";
import CategoriesPage from "./pages/Utility/CategoriesPage";
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
import ChangeSSHPage from "./pages/Delivery/ChangeSSHPage";
import ScanOrderDeliveryPage from "./pages/Delivery/ScanOrderDeliveryPage";
import DeliverySidebarComp from "./components/Delivery/DeliverySidebarComp";
import { ToastContainer } from "react-toastify";
import ChangePasswordPage from "./pages/Auth/ChangePasswordPage";
import UpdateOneMealPage from "./pages/Meal/UpdateOneMealPage";
import UserUpdateAddressPage from "./pages/User/UserUpdateAddressPage";
import MealsInCategoryPage from "./pages/Meal/MealsInCategoryPage";
import SearchPage from "./pages/Search/SearchPage";
import AdminAddUserPage from "./pages/Admin/AdminAddUserPage";
import AdminGetAllUsersPage from "./pages/Admin/AdminGetAllUsersPage";

// get user
let user;
if (localStorage.user) user = JSON.parse(localStorage.user);

const App = () => {
  return (
    <div className="app" id="app">
      {user && user.role === "admin" ? <AdminSidebarComp /> : ""}
      {user && user.role === "user" ? <UserSidebarComp /> : ""}
      {user && user.role === "delivery" ? <DeliverySidebarComp /> : ""}
      <Routes>
        {/* not auth */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* all */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<MealsInCategoryPage />} />
        <Route path="/meal/:id" element={<SpecificMealPage />} />
        <Route path="/menu" element={<SearchPage />} />

        {/* auth */}
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/verifyResetCode" element={<VerifyResetCodePage />} />
        <Route path="/setNewPassword" element={<SetNewPasswordPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
        <Route path="/updateUserInfo" element={<UpdateUserInfoPage />} />

        {/* user */}
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/user/addAddress" element={<UserAddAddress />} />
        <Route path="/user/addresses" element={<UserAddresses />} />
        <Route
          path="/user/updateAddress/:id"
          element={<UserUpdateAddressPage />}
        />
        <Route path="/user/favorite" element={<UserFavoritePage />} />
        <Route path="/user/orders" element={<UserOrdersPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />

        {/* admin */}
        <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/addMeal" element={<AddMealPage />} />
        <Route path="/meal/update/:id" element={<UpdateOneMealPage />} />
        <Route path="/admin/addCategory" element={<AdminAddCategoryPage />} />
        <Route path="/admin/addCoupon" element={<AddCouponPage />} />
        <Route path="/admin/getAllCoupons" element={<GetAllCouponsPage />} />
        <Route path="/admin/coupon/:id" element={<UpdateOneCouponPage />} />
        <Route path="/addAccount" element={<AdminAddUserPage />} />
        <Route path="/AllAccounts" element={<AdminGetAllUsersPage />} />

        {/* delivery */}
        <Route path="/delivery/orders" element={<DeliveryOrdersPage />} />
        <Route path="/delivery/scanOrder" element={<ScanOrderDeliveryPage />} />
        <Route path="/changeSSH" element={<ChangeSSHPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
