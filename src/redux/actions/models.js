// хронятся действия связаные с фильтрацией
import axios from "axios";

// библтотека REDUX THUNK
// асенхронная функция (dispatch)
export const fetchModels = (sortBy) => (dispatch) => {
  console.log(sortBy);
  axios
    .get(`/db?_sort=${sortBy}&_order=asc`)
    // _sort=${field}&_order=${order}
    .then(({ data }) => {
      dispatch(setModels(data.bd));
    });
};

export const setModels = (items) => ({
  type: "SET_MODELS",
  payload: items,
});
