import React from 'react'
import {Button} from '../..'


export default function Search(props) {

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
    console.log(props.itemsModels)
    
      return (
        <div className="cont description">
          <div className="form">    
            <form className="product-categories">
              <div className="block-img-info">
                {
                props.itemsModels.length > 0 ? props.itemsModels.map((el)=>( <div key={el.id + el} className="block-product">
                <img className="tv" src={el.img} alt=""/>
                { el.id && <h2 className="txt">id-<span>{el.id}</span></h2>}
                { el.name && <h2 className="txt"><span>{el.name}</span></h2>}
                { el.brand &&<h2 className="txt"> <span> Модель -{el.brand}</span></h2>}
                { el.screenSize && <h2 className="txt">Display - <span >{el.screenSize}</span></h2>}
                { el.memoryCard && <h2 className="txt">Памяти - <span>{el.memoryCard}</span></h2>}
                { el.memory && <h2 className="txt">Память - <span>{el.memory}</span></h2>}
                { el.cpu && <h2 className="txt">Процессор - <span>{el.cpu}</span></h2>}
                { el.videoCard && <h2 className="txt">Видеокарта - <span>{el.videoCard}</span></h2>}
                <h2 className="txt">Цена - <span>{el.price}</span></h2>
                <div>
                  <Button onClick={()=>onAddModels(el)} classBtn={'btn-basket'} text={'добавить в корзину'}/>
                </div>
                </div>)) : <h1 className="cont component-basket">Товар не найден</h1>
                    }
                </div>
              </form>
            </div>
          </div>
      )
}
