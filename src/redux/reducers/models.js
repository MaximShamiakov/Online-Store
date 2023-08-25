const initialState = {
  items: [],
  isLoaded: false,
};

const models = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODELS":
      const newItems = action.payload.filter(
        (item) => !state.items.some((i) => i.idProduct === item.idProduct)
      );
      return {
        ...state,
        items: [...state.items, ...newItems],
        isLoaded: true,
      };

    case "SET_SORT_BY":
      return {
        ...state,
        // 1. метод slice(), скопирует исходный массив
        // 2. метод sort(),который принимает функцию сравнения двух элементов массива ( arrayElementsA и arrayElementsB)
        items: state.items.slice().sort((arrayElementsA, arrayElementsB) => {
          if (action.payload === "price") {
            return arrayElementsA.price - arrayElementsB.price;
          } else if (action.payload === "popular") {
            return arrayElementsB.popular - arrayElementsA.popular;
          } else if (action.payload === "brand") {
            return arrayElementsA.brand.localeCompare(arrayElementsB.brand);
          }
          return 0;
        }),
      };
    default:
      return state;
  }
};

export default models;
