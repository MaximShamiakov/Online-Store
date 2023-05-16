import { combineReducers } from "redux";
import sorts from "./sort";
import models from "./models";
import category from "./category";
import cart from "./cart";
import filter from "./filter";

const rootReducer = combineReducers({
  sorts,
  models,
  category,
  cart,
  filter,
});

export default rootReducer;
