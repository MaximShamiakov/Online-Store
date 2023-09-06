const initialState = {
  items: [],
};

const descriptionReducer = (state = initialState, action) => {
  if (action.type === "REG_DESCRIPTION") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default descriptionReducer;
