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
