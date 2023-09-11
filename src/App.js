import React from "react";
import {
  Header,
  Product,
  Basket,
  Model,
  ComponentsBasket,
  OrderForm,
  Delivery,
  Service,
  Contacts,
  Design,
  MyOrders,
  Search,
  FilterModels,
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
import { startLoading, stopLoading } from "./Components/isLoadingThunks";

function App() {
  const dispatch = useDispatch();
  const itemsModels = useSelector(({ models }) => models.items);
  const modelsFilter = useSelector(
    ({ modelsFilterReducer }) => modelsFilterReducer.items
  );

  const categoryNumber = useSelector(({ category }) => category.number);
  // console.log(categoryNumber);
  const productNameList = useSelector(
    ({ productNameReducer }) => productNameReducer.items
  );
  // console.log(productNameList);
  const stateProducts = productNameList[categoryNumber]?.title;
  // console.log(stateProducts);
  const { sortBy } = useSelector(({ sorts }) => sorts);
  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
      dispatch(actionsPage(1));
    },
    [dispatch]
  );
  const cart = useSelector(({ cart }) => cart.items);

  //useEffect - позволяет выполнять определенные действия, когда происходят изменения,
  //обновление компонента или изменение значений. похож на методы жизненного цикла
  React.useEffect(() => {
    //fetchModels - эосуществляет обращение к серверу,
    dispatch(fetchModels());
  }, [dispatch]);
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
    if (obj.searchTerm.trim() === "") {
      dispatch(search([]));
    }
    dispatch(startLoading());
    axios
      .post("http://localhost:8000/search/", { name: obj.searchTerm })
      .then((response) => {
        dispatch(search(response.data));
        if (response.status === 200) {
          dispatch(stopLoading());
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading());
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
              stateProducts={stateProducts}
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
              path="design"
              element={<Design classNameProps={"home-block-of-text"} />}
            />
            <Route
              path="mainPage"
              element={
                <Model
                  onClickAddModels={handeleAddModelsToCart}
                  itemsModels={itemsModels}
                  categoryNumber={categoryNumber}
                  sortBy={sortBy}
                  stateProducts={stateProducts}
                />
              }
            />
            <Route
              path="mainPage/filter"
              element={
                <FilterModels
                  onClickAddModels={handeleAddModelsToCart}
                  modelsFilter={modelsFilter}
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
                  itemsModels={searchReducers}
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
