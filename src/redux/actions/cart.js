export const addModelsToCart = (obj) => ({
  type: "ADD_MODELS_CART",
  payload: obj,
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});

export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});
