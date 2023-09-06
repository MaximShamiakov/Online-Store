const initialState = {
  items: [],
};

const productNameReducer = (state = initialState, action) => {
  if (action.type === "PRODUCT_NAME") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default productNameReducer;
