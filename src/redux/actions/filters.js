// ACTION CREATOR
// хронятся действия связаные с фильтрацией

// ACTION CREATOR - это функция которая хронит денамические данные и прокидывает их в сам Action
export const setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
});
