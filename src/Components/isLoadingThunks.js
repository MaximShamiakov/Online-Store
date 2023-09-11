import { setLoading } from "../redux/actions/setLoading";
import { setLoadingHome } from "../redux/actions/setLoading";

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

export const startLoadingHome = () => {
  return (dispatch) => {
    dispatch(setLoadingHome(true));
  };
};

export const stopLoadingHome = () => {
  return (dispatch) => {
    dispatch(setLoadingHome(false));
  };
};
