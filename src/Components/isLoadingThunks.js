import { setLoading } from "../redux/actions/setLoading";

export const startLoading = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
  };
};

export const stopLoading = () => {
  return (dispatch) => {
    dispatch(setLoading(false));
  };
};
