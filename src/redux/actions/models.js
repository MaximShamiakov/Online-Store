import axios from "axios";
import { addModelsToCart } from "./cart";
import { myOrders } from "./myOrders";
import { regDescription } from "../../redux/actions/regDescription";
import { contacts } from "../../redux/actions/сontacts";
import { delivery } from "../../redux/actions/delivery";
import { service } from "../../redux/actions/service";
import { design } from "../../redux/actions/design";
import { productName } from "./productName";
import {
  startLoading,
  stopLoading,
  startLoadingHome,
  stopLoadingHome,
} from "../../Components/isLoadingThunks";

export const fetchModels = () => (dispatch) => {
  const actions = {
    regDescription,
    delivery,
    service,
    design,
    contacts,
  };
  const information = [
    { name: "regDescription" },
    { name: "delivery" },
    { name: "service" },
    { name: "design" },
    { name: "contacts" },
  ];
  const key = localStorage.getItem("key");

  if (
    !localStorage.getItem("name") &&
    !localStorage.getItem("key") &&
    window.location.href === "http://localhost:3000/userPage/mainPage"
  ) {
    window.location.href = "/";
  }
  dispatch(startLoading());
  axios.post("http://127.0.0.1:8000/", { title: "tv" }).then((data) => {
    dispatch(setModels(data.data));
    console.log(data.data);
    dispatch(stopLoading());
    if (data.status === 200) {
      dispatch(stopLoading());
    }
  });
  axios
    .post("http://127.0.0.1:8000/basket_add/", { key: key })
    .then((response) => {
      dispatch(startLoading());
      response.data.forEach((item) => {
        dispatch(addModelsToCart(item));
      });
      if (response.status === 200) {
        dispatch(stopLoading());
      }
    });
  axios
    .post("http://127.0.0.1:8000/addOrders/", { key: key })
    .then((response) => {
      dispatch(startLoading());
      response.data.forEach((item) => {
        dispatch(myOrders(item));
      });
      if (response.status === 200) {
        dispatch(stopLoading());
      }
    });

  information.forEach((item) => {
    axios.post(`http://127.0.0.1:8000/${item.name}/`).then((response) => {
      dispatch(actions[item.name](response.data));
    });
  });
  axios.post("http://127.0.0.1:8000/productName/").then((response) => {
    dispatch(startLoading());
    const data = response.data.map((item) => ({
      products: item.products,
      icons: item.icons,
      title: item.title,
    }));
    dispatch(productName(data));
    dispatch(stopLoading());
    dispatch(stopLoadingHome());
  });
};

export const setModels = (items) => ({
  type: "SET_MODELS",
  payload: items,
});
