import React, {useState} from 'react'
import {Button, VisiblePopup, Filter} from '../..'
import {useSelector, useDispatch} from "react-redux";
import { setSortBy } from '../../../redux/actions/sort';
import axios from 'axios';
import { setModels } from '../../../redux/actions/models';
import { actionsPage } from '../../../redux/actions/page';


export default function ModelTV(props) {
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
  const sortBy = props.sortBy
  const dispatch = useDispatch();
  const onSelectSortType = React.useCallback((type) => {
      dispatch(setSortBy(type));
  });
const onAddModels = (el)=>{
  const obj = {
    id: el.idProduct, 
    img: el.img,
    name: el.name,
    brand: el.brand,
    price :el.price,
  }
  props.onClickAddModels(obj)
}
const pageRedux = useSelector(({ page }) => page.items);
console.log(pageRedux)
const [title, setTitle] = useState(null);
const handleScroll = (event) => {
  setTitle(props.stateProducts);
  const target = event.target;
  if (target.scrollHeight - target.scrollTop === target.clientHeight) {
    axios.post("http://127.0.0.1:8000/", { title: title , page: pageRedux })
      .then(response => {
        dispatch(setModels(response.data));
        dispatch(actionsPage(null));
      })
      .catch(error => {
        console.log(error);
      });
  }
};
  return (
    <div className="cont description">
      <div className="form" onScroll={handleScroll}>
        <VisiblePopup activeSortText = {sortBy} onClickItem={onSelectSortType} />
        <Filter/>
        <form className="product-categories">
          <div className="block-img-info">
            {
            props.stateTv.map((el)=>( el.title === categorys[props.categoryNumber] && <div key={el.idProduct + el} className="block-product">
            <img className="tv" src={el.img} alt=""/>
            { el.idProduct && <h2 className="txt">id-<span>{el.idProduct}</span></h2>}
            { el.name && <h2 className="txt"><span>{el.name}</span></h2>}
            { el.brand &&<h2 className="txt"> <span> Модель -{el.brand}</span></h2>}
            { el.screenSize && <h2 className="txt">Display - <span >{el.screenSize}</span></h2>}
            { el.memoryCard && <h2 className="txt">Памяти - <span>{el.memoryCard}</span></h2>}
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
