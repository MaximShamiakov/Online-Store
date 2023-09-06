import axios from "axios";
import { addModelsToCart } from "./cart";
import { myOrders } from "./myOrders";
import { regDescription } from "../../redux/actions/regDescription";
import { contacts } from "../../redux/actions/сontacts";
import { delivery } from "../../redux/actions/delivery";
import { service } from "../../redux/actions/service";
import { design } from "../../redux/actions/design";
import { productName } from "./productName";

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
  axios.post("http://127.0.0.1:8000/", { title: "tv" }).then((data) => {
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

  information.forEach((item) => {
    axios.post(`http://127.0.0.1:8000/${item.name}/`).then((response) => {
      dispatch(actions[item.name](response.data));
    });
  });
  axios.post("http://127.0.0.1:8000/productName/").then((response) => {
    const data = response.data.map((item) => ({
      products: item.products,
      icons: item.icons,
      title: item.title,
    }));
    dispatch(productName(data));
  });
};

export const setModels = (items) => ({
  type: "SET_MODELS",
  payload: items,
});
