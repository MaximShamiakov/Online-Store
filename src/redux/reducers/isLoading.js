const initialState = {
  isLoading: true,
  isLoadingHome: true,
};

const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_LOADING_HOME":
      return {
        ...state,
        isLoadingHome: action.payload,
      };
    default:
      return state;
  }
};

export default isLoadingReducer;
