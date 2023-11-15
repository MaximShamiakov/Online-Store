import React from 'react'
import { Link} from 'react-router-dom';
import {Button} from '..'
import { useSelector } from 'react-redux';
import { handleMinusItem, handlePlusItem, handleRemoveClick } from '../buttonHandlers';


export default function Basket(props) {
  const {totalPrice, totalCount, items}= useSelector(({cart})=> cart)
  const addedModels = Object.keys(items).map(key =>{
    return(
      items[key].items[0]
    )
  })
 
  return (
    <div className="basket-block">
      <div className="form-card">
        <form className='basket-header' >
          <div className='header-basket'>
            <Link className='cont name-product' to={"componentsBasket"}>
              <Button
              text={"Корзина"} classBtn={"toggle-btn-card-1"}/>
            </Link>
            <Link className='cont name-product' to={"MyOrders"}>
              <Button
              text={"Мои заказы"} classBtn={"toggle-btn-card-1"}/>
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
                  <Button onClick={()=>handlePlusItem(obj.id, props.onPlus(obj.id))} classBtn={'plus-minus-btn'} text={'+'}/>
                  <h2 className='quantity-of-goods'>{items[obj.id].items.length} шт</h2>
                  <Button onClick={()=>handleMinusItem(obj.id, props.onMinus(obj.id))} classBtn={'plus-minus-btn'} text={'-'}/>
                </div>
                  <h2 className='txt'>{items[obj.id].totalPrice}$</h2>
              </div>
                <div className='basket-item-block'>
                  <Button onClick={()=>handleRemoveClick(obj.id, props.onRemove(obj.id))} classBtn={'basket-item-block-btn3'} text={'❌'}/>
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