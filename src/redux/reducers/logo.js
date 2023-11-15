const initialState = {
  logo: "",
};

const logo = (state = initialState, action) => {
  console.log(action);
  if (action.type === "LOGO") {
    return {
      ...state,
      logo: action.payload,
    };
  }
  return state;
};
export default logo;
