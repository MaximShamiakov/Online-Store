const initialState = {
  items: [],
};

const designReducer = (state = initialState, action) => {
  if (action.type === "DESIGN") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default designReducer;
