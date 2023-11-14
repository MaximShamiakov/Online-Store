import { combineReducers } from "redux";
import sorts from "./sort";
import models from "./models";
import category from "./category";
import cart from "./cart";
import filter from "./filter";
import myOrders from "./myOrders";
import search from "./search";
import page from "./page";
import contactsReducer from "./сontacts";
import deliveryReducer from "./delivery";
import designReducer from "./design";
import serviceReducer from "./service";
import descriptionReducer from "./regDescription";
import productNameReducer from "./productName";
import isLoadingReducer from "./isLoading";
import modelsFilterReducer from "./modelsFilter";
import logo from "./logo";

const rootReducer = combineReducers({
  sorts,
  models,
  category,
  cart,
  filter,
  myOrders,
  search,
  page,
  contactsReducer,
  deliveryReducer,
  designReducer,
  serviceReducer,
  descriptionReducer,
  productNameReducer,
  isLoadingReducer,
  modelsFilterReducer,
  logo,
});

export default rootReducer;
