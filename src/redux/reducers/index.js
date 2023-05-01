import { combineReducers } from "redux";
import filters from "./filters";
import models from "./models";
import category from "./category";
import cart from "./cart";

const rootReducer = combineReducers({
  filters,
  models,
  category,
  cart,
});

export default rootReducer;
