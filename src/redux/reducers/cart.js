import axios from "axios";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
// console.log(initialState.items);

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};
const key = localStorage.getItem("key");
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MODELS_CART": {
      // console.log(action.payload);
      const currentModelsItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentModelsItems,
          totalPrice: getTotalPrice(currentModelsItems),
        },
      };
      console.log(newItems[0]);
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      // console.log(totalPrice);
      const product_id = action.payload.id;
      // console.log(action.payload.id);
      const quantity = currentModelsItems.length;
      // console.log(currentModelsItems.length);
      axios
        .post("http://127.0.0.1:8000/basket/", {
          product_id,
          quantity,
          key,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так в cart");
          } else {
            alert("добавилось в корзину cart");
          }
        })
        .catch((err) => {
          alert(err);
        });

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      const product_id = action.payload;
      const quantity = 0;
      axios
        .post("http://127.0.0.1:8000/basket/", {
          product_id,
          key,
          quantity,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так в cart и REMOVE_CART_ITEM не сработал");
          } else {
            alert("REMOVE_CART_ITEM сработал cart");
          }
        })
        .catch((res) => {
          alert(res);
        });

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      const quantity = newObjItems.length;
      // console.log(quantity);
      const product_id = action.payload;
      // console.log(product_id);
      axios
        .post("http://127.0.0.1:8000/basket/", {
          key,
          product_id,
          quantity,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так в cart и + не сработал");
          } else {
            alert("+ сработал cart");
          }
        })
        .catch((err) => {
          alert(err);
        });

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      const quantity = newObjItems.length;
      // console.log(quantity);
      const product_id = action.payload;
      // console.log(product_id);
      axios
        .post("http://127.0.0.1:8000/basket/", {
          key,
          quantity,
          product_id,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так в cart и - не сработал");
          } else {
            alert("- сработал cart");
          }
        })
        .catch((err) => {
          alert(err);
        });

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART":
      return { totalPrice: 0, totalCount: 0, items: {} };

    default:
      return state;
  }
};
export default cart;
