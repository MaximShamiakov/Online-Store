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
} from "./Components";

import { Routes, Route } from "react-router-dom";
import "./style/app.css";
import "./style/styles_shopMax.css";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "./redux/actions/category";
import { fetchModels } from "./redux/actions/models";
import { addModelsToCart } from "./redux/actions/cart";
import {
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "./redux/actions/cart";

function App() {
  const dispatch = useDispatch();
  const itemsModels = useSelector(({ models }) => models.items);
  const categoryNumber = useSelector(({ category }) => category.number);
  const { sortBy } = useSelector(({ sorts }) => sorts);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  React.useEffect(() => {
    dispatch(fetchModels(sortBy));
  }, []);

  const handeleAddModelsToCart = async (obj) => {
    dispatch(addModelsToCart(obj));
    console.log(obj);
  };

  const onRemoveItem = (id) => {
    dispatch(removeCartItem(id));
    console.log("удаление товара id-", id);
  };
  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
    console.log("+ товара id-", id);
  };
  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
    console.log("- товара id-", id);
  };

  const classNameDescription = "description";
  const classNameText = "text-reg-header-information ";
  const name = localStorage.getItem("name");
  return (
    <div className="main">
      <div className="wrap">
        <Header />
        <div>Привет {name}!</div>
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
              element={
                <Delivery
                  className={classNameDescription}
                  classNameText={classNameText}
                />
              }
            />
            <Route
              path="service"
              element={
                <Service
                  className={classNameDescription}
                  classNameText={classNameText}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <Contacts
                  className={classNameDescription}
                  classNameText={classNameText}
                />
              }
            />
            <Route
              path="desing"
              element={
                <Desing
                  className={classNameDescription}
                  classNameText={classNameText}
                />
              }
            />
            <Route
              path="mainPage"
              element={
                <Model
                  onClickAddModels={handeleAddModelsToCart}
                  stateTv={itemsModels}
                  categoryNumber={categoryNumber}
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
