const initialState = {
  items: 2,
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIONS_PAGE":
      return {
        ...state,
        items: action.payload !== null ? action.payload + 1 : state.items + 1,
      };

    default:
      return state;
  }
};

export default page;
