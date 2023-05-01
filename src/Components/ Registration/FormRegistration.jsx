import React from 'react'
import {Button} from "../index"
import { Link } from 'react-router-dom'

export default function FormRegistration(props) {

  const inputFields = [
    {type:"text", placeholder:"Имя пользователя"},
    {type:"password", placeholder:"Пороль"},
    {type:"password", placeholder:"Повтарите пороль"},
    {type:"email", placeholder:"Email"},   
  ]
  return (
    <div className="input-group">
        <div className="button-box">
            <Link  to={"authorization"}>
                <Button classBtn={'btn-registration'} propsText={"Вход ⇒"}/>
            </Link>
        </div>
        <div className="icons">
            {
              props.icons.map((el)=>( <a key={el}><ion-icon name={el}></ion-icon></a>))
            }
        </div>
        {
            inputFields.map((el)=>( <input key={el.placeholder} type={el.type} className="registration-input-fields" placeholder={el.placeholder} required/>))
        }
        <div className='header-basket'>
            <Button type={"submit"} classBtn={'btn-form-registration'} propsText={"Зарегистрироваться"}/>
        </div>
    </div>
  )
}
