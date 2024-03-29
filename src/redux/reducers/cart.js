import axios from "axios";
import { API_URL } from "../../config";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
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
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
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
        .post(`${API_URL}/basket/`, {
          product_id,
          key,
          quantity,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так");
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
      const product_id = action.payload;
      axios
        .post(`${API_URL}/basket/`, {
          key,
          product_id,
          quantity,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так в cart и + не сработал");
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
      const product_id = action.payload;
      axios
        .post(`${API_URL}/basket/`, {
          key,
          quantity,
          product_id,
        })
        .then((res) => {
          if (res.status !== 200) {
            alert("что-то пошло не так в cart и - не сработал");
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
