const initialState = {
  number: 0,
};

const category = (state = initialState, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      number: action.payload,
    };
  }
  return state;
};

export default category;
