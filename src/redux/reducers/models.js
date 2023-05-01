// чистая функция
// хронится логика изменяющая
const initialState = {
  items: [],
  isLoaded: false,
};

const models = (state = initialState, action) => {
  if (action.type === "SET_MODELS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default models;
