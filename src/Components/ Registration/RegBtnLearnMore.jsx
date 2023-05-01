import React from 'react'
import {Button, FormRegistration, FormAuthorization} from "../index"
import { Routes, Route, Link } from 'react-router-dom'

export default function RegBtnLearnMore(props) {

  return (
    <div className="registration-block">
        <div className="cont block-of-text">
              <div className="text-reg">
                    <h1 className="text-big">Удобный интернет-магазин & <span>ShopMax</span> </h1>
                    <p className="par">Мы в студии ДзенДизайн на протяжении 10 лет разрабатываем крупные e-commerce проекты. 
                        Интернет-магазин состоит из продуманных мелочей.
                        Это в свою очередь увеличивает продажи и способствует тому, что покупатели возвращаются для последующих покупок.
                        Мы хотим поделиться своим опытом и будем рады, если данная статья будет полезна владельцам интернет-магазинов.
                        
                        Классические продающие механики<br/>
                        Существуют классические продающие механики.
                        Они показали свою эффективность, потому что рассчитаны на разный тип мышления людей и,
                        помимо продаж, помогают пользователям быстрее найти товар для покупки.  
                        Данные механики можно применять все одновременно, как на главной странице, так и в основном каталоге. 
                        
                        Лидеры продаж<br/>
                        значит, это хорошо, значит, и я куплю.<br/>

                        Распродажа<br/>
                        Распродажи привлекают людей, которые стараются экономить, покупая товары со скидкой.
                                
                        Новинки / в тренде<br/>
                        Новинки выбирают люди, кто хочет всегда быть в тренде.
                        Они хотят использовать передовые технологии и товары,
                        поэтому это категория для них.</p>

                    <Link to={"/"}>
                        <Button type={"submit"} classBtn={"cn"} propsText={"⇐ Назад"}/>      
                    </Link>
              </div>
        </div>
        <div className="form-registration-authorization">
            <Routes>
                <Route path='/' element={<FormRegistration icons={props.icons}/>}/>
                <Route path='authorization' element={<FormAuthorization icons={props.icons}/>}/>
            </Routes>
        </div>
    </div>
  )
}





