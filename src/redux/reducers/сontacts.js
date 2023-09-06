const initialState = {
  items: [],
};

const contactsReducer = (state = initialState, action) => {
  if (action.type === "CONTACTS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default contactsReducer;
