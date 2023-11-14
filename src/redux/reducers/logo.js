const initialState = {
  logo: "",
};

const logo = (state = initialState, action) => {
  console.log(action);
  if (action.type === "SET_LOGO") {
    return {
      ...state,
      logo: action.payload,
    };
  }
  return state;
};
export default logo;
