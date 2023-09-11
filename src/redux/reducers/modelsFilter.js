const initialState = {
  items: [],
};

const modelsFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODELS_FILTER":
      return {
        ...state,
        items: action.payload,
      };

    case "SET_SORT_BY":
      return {
        ...state,
        items: state.items.slice().sort((arrayA, arrayB) => {
          if (action.payload === "price") {
            return arrayA.price - arrayB.price;
          } else if (action.payload === "popular") {
            return arrayB.popular - arrayA.popular;
          } else if (action.payload === "brand") {
            return arrayA.brand.localeCompare(arrayB.brand);
          }
          return 0;
        }),
      };
    default:
      return state;
  }
};

export default modelsFilterReducer;
