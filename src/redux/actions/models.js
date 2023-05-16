import axios from "axios";

export const fetchModels = () => (dispatch) => {
  axios.get("http://127.0.0.1:8000/").then((data) => {
    dispatch(setModels(data.data));
  });
};

export const setModels = (items) => ({
  type: "SET_MODELS",
  payload: items,
});
