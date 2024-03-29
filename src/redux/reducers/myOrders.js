const initialState = {
  items: {},
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const myOrders = (state = initialState, action) => {
  switch (action.type) {
    case "MY_ORDERS": {
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

      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default myOrders;
