import React from 'react'
import {Button, VisiblePopup} from '../..'
import { useDispatch } from "react-redux";
import { setSortBy } from '../../../redux/actions/filters';


const categorys = [
  "tv",
  "telephone",
  "computers",
  "kitchen",
  "audio",
  "game",
  "sport",
  "photoVideo"
]

export default function ModelTV(props) {
  const sortBy = props.sortBy
    const dispatch = useDispatch();
    const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
    console.log(type)
  });
  
const onAddModels = (el)=>{
  const obj = {
    id: el.id, 
    img: el.img,
    name: el.name,
    brand: el.brand,
    price :el.price,
  }
  props.onClickAddModels(obj)  
}

  return (
    <div className="cont description">
        <div className="form">
            <VisiblePopup activeSortType = {sortBy} onClickItem={onSelectSortType} />
            <form className="input-group">
                <div className="block-img-info">
                {
                  props.stateTv.map((el)=>( el.title === categorys[props.categoryNumber] &&  <div key={el.id + el} className="block-product">
                  <img className="tv" src={el.img} alt=""/>
                    { el.name && <h2 className="txt">Наименование - <span>{el.name}</span></h2>}
                    { el.brand &&<h2 className="txt"> <span> Модель -{el.brand}</span></h2>}
                    { el.screenSize && <h2 className="txt">Размер экрана - <span >{el.screenSize}</span></h2>}
                    { el.memoryCard && <h2 className="txt">Карт памяти - <span>{el.memoryCard}</span></h2>}
                    { el.memory && <h2 className="txt">Память - <span>{el.memory}</span></h2>}
                    { el.cpu && <h2 className="txt">Процессор - <span>{el.cpu}</span></h2>}
                    { el.videoCard && <h2 className="txt">Видеокарта - <span>{el.videoCard}</span></h2>}
                    <h2 className="txt">Цена - <span>{el.price}</span></h2>
                    <div>
                        <Button onClick={()=>onAddModels(el)} classBtn={'btn-basket'} propsText={'добавить в корзину'}/>
                    </div>
                </div>))
                }
                </div>
            </form>
        </div>
    </div>
  )
}
