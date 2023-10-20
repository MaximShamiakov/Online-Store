const initialState = {
  items: [],
  isLoaded: false,
};

const models = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODELS":
      const newItems = action.payload.filter(
        (item) => !state.items.some((i) => i.id === item.id)
      );
      return {
        ...state,
        items: [...state.items, ...newItems],
        isLoaded: true,
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

export default models;
