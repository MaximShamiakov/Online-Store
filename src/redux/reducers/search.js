const initialState = {
  items: [],
};

const searchReducer = (state = initialState, action) => {
  if (action.type === "SEARCH") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default searchReducer;
