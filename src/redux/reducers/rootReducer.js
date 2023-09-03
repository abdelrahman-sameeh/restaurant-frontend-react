import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { mealReducer } from "./mealReducer";
import { categoryReducer } from "./categoryReducer";
import { couponReducer } from "./couponReducer";
import { favoriteReducer } from "./favoriteReducer";
import { cartReducer } from "./cartReducer";
import { addressReducer } from "./addressReducer";
import { orderReducer } from "./orderReducer";
import { deliveryReducer } from "./deliveryReducer";
import { reviewReducer } from "./reviewReducer";
import { adminReducer } from "./adminReducer";

export const rootReducer = combineReducers({
  Auth: AuthReducer,
  User: userReducer,
  Category: categoryReducer,
  Meal: mealReducer,
  Coupon: couponReducer,
  Favorite: favoriteReducer,
  Cart: cartReducer,
  Address: addressReducer,
  Order: orderReducer,
  Delivery: deliveryReducer,
  Review: reviewReducer,
  Admin: adminReducer
});
