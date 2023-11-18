import axios from "axios";
import { addModelsToCart } from "./cart";
import { myOrders } from "./myOrders";
import { productName } from "./productName";
import {
  startLoading,
  stopLoading,
  startLoadingComponent,
  stopLoadingComponent,
} from "../../Components/RepeatTheCode/isLoadingThunks";
import { API_URL } from "../../config";

export const fetchModels = () => (dispatch) => {
  const key = localStorage.getItem("key");

  if (
    !localStorage.getItem("name") &&
    !localStorage.getItem("key") &&
    window.location.href === "/userPage/mainPage"
  ) {
    window.location.href = "/";
  }
  axios.post(`${API_URL}/material/`, { title: "tv" }).then((data) => {
    dispatch(startLoadingComponent());
    dispatch(setModels(data.data));
    dispatch(stopLoadingComponent());
    if (data.status === 200) {
      dispatch(stopLoadingComponent());
    }
  });
  axios.post(`${API_URL}/basket_add/`, { key: key }).then((response) => {
    dispatch(startLoadingComponent());
    response.data.forEach((item) => {
      dispatch(addModelsToCart(item));
      dispatch(stopLoadingComponent());
    });
    if (response.status === 200) {
      dispatch(stopLoadingComponent());
    }
  });
  axios.post(`${API_URL}/addOrders/`, { key: key }).then((response) => {
    dispatch(startLoadingComponent());
    response.data.forEach((item) => {
      dispatch(myOrders(item));
      dispatch(stopLoadingComponent());
    });
    if (response.status === 200) {
      dispatch(stopLoadingComponent());
    }
  });
  axios.post(`${API_URL}/productName/`).then((response) => {
    dispatch(startLoading());
    const data = response.data.map((item) => ({
      products: item.products,
      icons: item.icons,
      title: item.title,
    }));
    dispatch(productName(data));
    dispatch(stopLoading());
  });
};

export const setModels = (items) => ({
  type: "SET_MODELS",
  payload: items,
});
