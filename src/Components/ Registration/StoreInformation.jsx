import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {Button, RegistrationForm, AuthenticationForm} from "../index"


export default function StoreInformation(props) {

  return (
    <div className="registration-block">
        <div className="cont block-of-text">
            <div className="text-reg">
                <h1 className="text-big">Интернет-магазин & <br/><span>ShopMax</span> <br/>Бытовая техника</h1>
                <p className="par">Интернет-магазин — сайт, торгующий товарами посредством сети Интернет. <br/> 
                Позволяет пользователям онлайн, <br/>
                в своём браузере или через мобильное приложение, <br/> 
                сформировать заказ на покупку, выбрать способ оплаты и доставки заказа, <br/>
                оплатить заказ. <br/>
                При этом продажа товаров осуществляется дистанционным способом и <br/>
                она накладывает ограничения на продаваемые товары. <br/>
                Типичный интернет-магазин позволяет клиенту просматривать ассортимент <br/>
                продуктов и услуг фирмы, просматривать фотографии или изображения продуктов, <br/>
                а также информацию о технических характеристиках продукта и ценах. <br/>
                Интернет-магазины обычно позволяют покупателям использовать функции <br/>
                «поиска», чтобы найти конкретные модели, бренды или предметы.</p>
                <Link to={"regBtnLearnMore"}>
                    <Button type={"submit"} classBtn={"cn"} propsText={"УЗНАТЬ БОЛЬШЕ"}/>   
                </Link>
            </div>
        </div>
        <div className="form-registration-authorization">
            <Routes>
                <Route path='/' element={<RegistrationForm icons={props.icons}/>}/>
                <Route path='authorization' element={<AuthenticationForm icons={props.icons}/>}/>
            </Routes>
          </div>
    </div>
  )
}
