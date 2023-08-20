import React from 'react'
import { useSelector} from 'react-redux'


export default function MyOrders(props) {

    const items = useSelector(({myOrders})=> myOrders.items)
    const addedOrder = Object.keys(items).map((key) =>{
      return items[key].items[0]
    })

    return (
        <div className="cont description">
          <div className="form">
            <form className="all-order-form">
              <div className='heading-number-sum'>
                {addedOrder.length !== 0 ?
                <span className='cont component-basket'>Мои заказы</span> :
                <span className='cont component-basket'>Заказов нет!</span>
                }
              </div>
              <div className='shopping-cart'>
                {
                addedOrder.map((obj)=>(
                  <div key={obj + obj.idProduct} className="block-product-basket">
                    <img className="img-basket" src={obj.img} alt=""/>                
                    <div className='info-product-basket'>
                      <h2 className="txt"><span>{obj.name}</span></h2>
                      <h2 className="txt">Модель - <span> {obj.brand}</span></h2>
                      <h2 className="txt">Цена - <span>{obj.price}</span></h2>
                      <h2 className='txt'>{items[obj.idProduct].items.length} шт </h2>
                      <h2 className='txt'>Итог-{items[obj.idProduct].totalPrice}$</h2>                        
                    </div>
                    <div className='basket-item-block'>
                      <h2 className="txt">email <span>{obj.email}</span></h2>
                      <h2 className="txt">Адрес - <span>{obj.address}</span></h2>
                      <h2 className="txt">Город - <span> {obj.city}</span></h2>
                      <h2 className="txt">Имя - <span>{obj.firstName}</span></h2>
                      <h2 className="txt">Фамилия <span>{obj.lastName}</span></h2>
                      <h2 className="txt">Телефон - <span>{obj.phone}</span></h2>
                    </div>                    
                  </div>
                    ))
                  }
              </div>
            </form>
          </div>
        </div>
      )
}