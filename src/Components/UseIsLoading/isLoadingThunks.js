import { setLoading } from "../../redux/actions/setLoading";
import { setLoadingComponent } from "../../redux/actions/setLoading";
import { useSelector } from "react-redux";

export const useIsLoading = () => {
  const isLoading = useSelector(
    ({ isLoadingReducer }) => isLoadingReducer.isLoading
  );
  return isLoading;
};

export const useIsLoadingComponent = () => {
  const isLoadingComponent = useSelector(
    ({ isLoadingReducer }) => isLoadingReducer.isLoadingComponent
  );
  return isLoadingComponent;
};

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

export const startLoadingComponent = () => {
  return (dispatch) => {
    dispatch(setLoadingComponent(true));
  };
};

export const stopLoadingComponent = () => {
  return (dispatch) => {
    dispatch(setLoadingComponent(false));
  };
};
