import React from "react";
import Button from "../Button/Button";

export const ProductItem = ({el, onAddModels}) => {
    return (
        <div key={el.id + el} className="block-product">
          <img className="tv" src={el.img} alt="" />
          {el.name && <h2 className="txt"><span>{el.name}</span></h2>}
          {el.brand && <h2 className="txt"> <span> Модель -{el.brand}</span></h2>}
          {el.screenSize && <h2 className="txt">Display - <span >{el.screenSize}</span></h2>}
          {el.memoryCard && <h2 className="txt">Памяти - <span>{el.memoryCard}</span></h2>}
          {el.memory && <h2 className="txt">Память - <span>{el.memory}</span></h2>}
          {el.cpu && <h2 className="txt">Процессор - <span>{el.cpu}</span></h2>}
          {el.videoCard && <h2 className="txt">Видеокарта - <span>{el.videoCard}</span></h2>}
          <h2 className="txt">Цена - <span>{el.price}</span></h2>
          <div>
            <Button onClick={() => onAddModels(el)} classBtn={'btn-basket'} text={'добавить в корзину'} />
          </div>
        </div>
      );
}