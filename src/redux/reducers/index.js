import { combineReducers } from "redux";
import sorts from "./sort";
import models from "./models";
import category from "./category";
import cart from "./cart";
import filter from "./filter";
import myOrders from "./myOrders";
import search from "./search";
import page from "./page";

const rootReducer = combineReducers({
  sorts,
  models,
  category,
  cart,
  filter,
  myOrders,
  search,
  page,
});

export default rootReducer;
