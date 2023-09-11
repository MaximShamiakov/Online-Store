const initialState = {
  minPrice: "Min- цена",
  maxPrice: "Max- цена",
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    case "CLEAR":
      return {
        minPrice: "Min- цена",
        maxPrice: "Max- цена",
      };

    default:
      return state;
  }
};

export default filter;
