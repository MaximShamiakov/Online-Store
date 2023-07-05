import React from 'react'
import { Link} from 'react-router-dom';
import {Button} from '..'
import { useSelector } from 'react-redux';



export default function Basket(props) {
  const {totalPrice, totalCount, items}= useSelector(({cart})=> cart)
  const addedModels = Object.keys(items).map(key =>{
    return(
      items[key].items[0]
    )
  })



  const handeleRemoveClick = (id)=>{
    props.onRemove(id)
  }
  const handelePlusItem = (id)=>{
    props.onPlus(id)
  }
  const handeleMinusItem = (id)=>{
    props.onMinus(id)
  }
 
  return (
    <div className="basket-block">
      <div className="form-card">
       <form >
        <div className='header-basket'>
            <Link  to={"componentsBasket"}>
                  <Button
                  propsText={"Корзина"}  classBtn={"toggle-btn-card-1"}/>
            </Link>
        </div>
          <div className='header-basket'>                 
              <span className="cont component-basket2">Количество-{totalCount}</span>
              <span className="cont component-basket2">Сумма-{totalPrice}$</span> 
          </div>

          {
            totalCount ?
            addedModels.map((obj)=>(
          <div key={obj.id + obj} className="cart-wrapper">
              <div className="block-product-basket">
                  <img className="img-basket" src={obj.img} alt=""/>
                  <div className='info-product-basket'>
                      <h2 className="txt"><span>{obj.name}</span></h2>
                      <h2 className="txt"> <span> {obj.brand}</span></h2>
                      <h2 className="txt">Цена - <span>{obj.price}$</span></h2>
                      <div className='plus-minus'>
                          <Button onClick={()=>handelePlusItem(obj.id)}  classBtn={'plus-minus-btn'} propsText={'+'}/>
                          <h2 className='txt'>{items[obj.id].items.length} шт </h2>
                          <Button onClick={()=>handeleMinusItem(obj.id)}  classBtn={'plus-minus-btn'} propsText={'-'}/>
                      </div>
                      <h2 className='txt'>{items[obj.id].totalPrice}$</h2>
                  </div>
                  <div className='basket-item-block'>
                      <Button onClick={()=>handeleRemoveClick(obj.id)}  classBtn={'basket-item-block-btn3'} propsText={'❌'}/>
                  </div>
              </div>
          </div>
            )) : <h1 className="cont component-basket"> Корзина пуста</h1>
          }
        </form>
      </div>
    </div>
  )
}