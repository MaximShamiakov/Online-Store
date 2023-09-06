const initialState = {
  items: [],
};

const deliveryReducer = (state = initialState, action) => {
  if (action.type === "DELIVERY") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default deliveryReducer;
