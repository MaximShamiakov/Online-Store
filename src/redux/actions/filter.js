export const setFilter = (minPrice, maxPrice) => ({
  type: "SET_FILTER",
  payload: { minPrice, maxPrice },
});
