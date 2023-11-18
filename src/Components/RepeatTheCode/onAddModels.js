export const onAddModels = (props, el, onClickAddModels) => {
  const obj = {
    id: el.id,
    img: el.img,
    name: el.name,
    brand: el.brand,
    price: el.price,
  };
  props.onClickAddModels(obj);
};
