import React from "react";
import {
  Header,
  Product,
  Basket,
  Model,
  StateProducts,
  ComponentsBasket,
  OrderForm,
  Delivery,
  Service,
  Contacts,
  Desing,
  MyOrders,
  Search,
} from "./Components";

import { Routes, Route } from "react-router-dom";
import "./style/app.css";
import "./style/styles_shopMax.css";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "./redux/actions/category";
import { fetchModels } from "./redux/actions/models";
import { addModelsToCart } from "./redux/actions/cart";
import { search } from "./redux/actions/search";
import { actionsPage } from "./redux/actions/page";
import {
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "./redux/actions/cart";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const itemsModels = useSelector(({ models }) => models.items);
  const categoryNumber = useSelector(({ category }) => category.number);
  const stateProducts = StateProducts[categoryNumber].title;
  const { sortBy } = useSelector(({ sorts }) => sorts);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    dispatch(actionsPage(1));
  });
  const cart = useSelector(({ cart }) => cart.items);
  React.useEffect(() => {
    dispatch(fetchModels(sortBy));
  }, []);

  const handeleAddModelsToCart = async (obj) => {
    dispatch(addModelsToCart(obj));
    const product_id = obj.id;
    const key = localStorage.getItem("key");
    let quantity = 1;
    if (cart[obj.id] && cart[obj.id].items.length > 0) {
      quantity = cart[obj.id].items.length + 1;
    }
    axios.post("http://127.0.0.1:8000/basket/", {
      product_id,
      key,
      quantity,
    });
  };

  const searchReducers = useSelector(({ search }) => search.items);
  const handleSearch = (obj) => {
    axios
      .post("http://localhost:8000/search/", { name: obj.searchTerm })
      .then((response) => {
        console.log(response.data);
        dispatch(search(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };
  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };
  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };
  const name = localStorage.getItem("name");
  return (
    <div className="main">
      <div className="wrap">
        <Header onSearch={handleSearch} />
        <div className="par">
          Добро пожаловать <span className="username">{name}!</span>
        </div>
        <div className="products">
          <div className="cont product">
            <Product
              stateProducts={StateProducts}
              onClickItem={onSelectCategory}
              categoryNumber={categoryNumber}
            />
          </div>
          <Routes>
            <Route
              path="delivery"
              element={<Delivery classNameProps={"home-block-of-text"} />}
            />
            <Route
              path="service"
              element={<Service classNameProps={"home-block-of-text"} />}
            />
            <Route
              path="contacts"
              element={<Contacts classNameProps={"home-block-of-text"} />}
            />
            <Route
              path="desing"
              element={<Desing classNameProps={"home-block-of-text"} />}
            />
            <Route
              path="mainPage"
              element={
                <Model
                  onClickAddModels={handeleAddModelsToCart}
                  stateTv={itemsModels}
                  categoryNumber={categoryNumber}
                  sortBy={sortBy}
                  stateProducts={stateProducts}
                />
              }
            />
            <Route
              path="search"
              element={
                <Search
                  onClickAddModels={handeleAddModelsToCart}
                  stateTv={searchReducers}
                  sortBy={sortBy}
                />
              }
            />
            <Route
              path="componentsBasket"
              element={
                <ComponentsBasket
                  onRemove={onRemoveItem}
                  onPlus={onPlusItem}
                  onMinus={onMinusItem}
                />
              }
            />
            <Route path="orderForm" element={<OrderForm />} />
            <Route path="myOrders" element={<MyOrders />} />
          </Routes>
          <Basket
            onRemove={onRemoveItem}
            onPlus={onPlusItem}
            onMinus={onMinusItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
