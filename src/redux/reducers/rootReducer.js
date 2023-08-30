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

export const rootReducer = combineReducers({
  Auth: AuthReducer,
  User: userReducer,
  Category: categoryReducer,
  Meal: mealReducer,
  Coupon: couponReducer,
  Favorite: favoriteReducer,
  Cart: cartReducer,
  Address: addressReducer,
  Order: orderReducer
});
