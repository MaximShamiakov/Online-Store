const initialState = {
  isLoading: true,
};

const isLoadingReducer = (state = initialState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  return state;
};

export default isLoadingReducer;
