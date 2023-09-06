const initialState = {
  items: [],
};

const serviceReducer = (state = initialState, action) => {
  if (action.type === "SERVICE") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default serviceReducer;
