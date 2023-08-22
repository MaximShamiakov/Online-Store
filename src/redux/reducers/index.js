import { combineReducers } from "redux";
import sorts from "./sort";
import models from "./models";
import category from "./category";
import cart from "./cart";
import filter from "./filter";
import myOrders from "./myOrders";
import search from "./search";

const rootReducer = combineReducers({
  sorts,
  models,
  category,
  cart,
  filter,
  myOrders,
  search,
});

export default rootReducer;
