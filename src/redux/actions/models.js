import axios from "axios";
import { addModelsToCart } from "./cart";
import { myOrders } from "./myOrders";

export const fetchModels = () => (dispatch) => {
  const key = localStorage.getItem("key");
  axios.post("http://127.0.0.1:8000/").then((data) => {
    dispatch(setModels(data.data));
  });
  axios
    .post("http://127.0.0.1:8000/basket_add/", { key: key })
    .then((response) => {
      response.data.forEach((item) => {
        dispatch(addModelsToCart(item));
      });
    });
  axios
    .post("http://127.0.0.1:8000/addOrders/", { key: key })
    .then((response) => {
      response.data.forEach((item) => {
        dispatch(myOrders(item));
      });
    });
};

export const setModels = (items) => ({
  type: "SET_MODELS",
  payload: items,
});
