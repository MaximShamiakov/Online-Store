import { combineReducers } from "redux";
import sorts from "./sort";
import models from "./models";
import category from "./category";
import cart from "./cart";
import filter from "./filter";
import myOrders from "./myOrders";

const rootReducer = combineReducers({
  sorts,
  models,
  category,
  cart,
  filter,
  myOrders,
});

export default rootReducer;
