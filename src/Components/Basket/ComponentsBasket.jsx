import React from 'react'
import Button from '../Button/Button'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

export default function ComponentsBasket(props) {

  const {totalPrice, totalCount, items}= useSelector(({cart})=> cart)
  const addedModels = Object.keys(items).map((key) =>{
    return items[key].items[0]
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
        <div className="cont description">
            <div className="form">
                <form className="input-group">
                  <div className='header-basket'>                 
                      <span className="cont component-basket">Количество-{totalCount}</span>
                      <span className="cont component-basket">Сумма-{totalPrice}$</span>
                  </div>

                  <div>
                  {
                    totalCount ? addedModels.map((obj)=>(
                      <div key={obj + obj.id} className="block-product-basket">
                          <img className="img-basket" src={obj.img} alt=""/>
                  
                          <div className='info-product-basket'>
                              <h2 className="txt">Наименование - <span>{obj.name}</span></h2>
                              <h2 className="txt">Модель - <span> {obj.brand}</span></h2>
                              <h2 className="txt">Цена - <span>{obj.price}</span></h2>
                              <h2 className='txt'>Итог-{items[obj.id].totalPrice}$</h2>
                              <div className='plus-minus'>
                                  <Button onClick={()=>handelePlusItem(obj.id)}  classBtn={'plus-minus-btn'} propsText={'+'}/>
                                  <h2 className='txt'>{items[obj.id].items.length} шт </h2>
                                  <Button onClick={()=>handeleMinusItem(obj.id)}  classBtn={'plus-minus-btn'} propsText={'-'}/>
                              </div>
                          </div>
                        
                        <div className='basket-item-block'>
                            <Link to={"/userPage/orderForm"}>
                                <Button classBtn={'basket-item-block-btn'} propsText={'Заказать'}/>
                            </Link>
                                <Button onClick={()=>handeleRemoveClick(obj.id)}  classBtn={'basket-item-block-btn'} propsText={'Удалить'}/>
                        </div>
                      
                    </div>
                    )) : <h1 className="cont component-basket"> Корзина пуста</h1>
                  }
                  </div>
                </form>
            </div>
        </div>
      )
}
