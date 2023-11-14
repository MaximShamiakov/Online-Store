const initialState = {
  isLoading: true,
  isLoadingComponent: true,
};

const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_LOADING_COMPONENT":
      return {
        ...state,
        isLoadingComponent: action.payload,
      };
    default:
      return state;
  }
};

export default isLoadingReducer;
