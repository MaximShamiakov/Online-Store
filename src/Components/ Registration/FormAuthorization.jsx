import React from "react"
import { Link } from "react-router-dom"
import {Button} from "../index"

export default function FormAuthorization(props) {
  const inputFields = [
    {type:"text", placeholder:"Логин"},
    {type:"password", placeholder:"Пороль"},
  ]
  return (
    <div className="input-group">
        <div className="button-box">
            <Link to={"/"}>
                <Button classBtn={"btn-registration"} propsText={"⇐ Регистрация"}/>
            </Link>
        </div>
        <div className="icons">
            {
              props.icons.map((el)=>(<a key={el} ><ion-icon name={el}></ion-icon></a>))
            }
        </div>
      
        <div className='login-Password'>
            {
              inputFields.map((el)=>(<input key={el.type} type={el.type} className="registration-input-fields" placeholder={el.placeholder} required/>))
            }    
        </div>
        <div className='block-checkbox'>
            <input type="checkbox" className="checkbox"/>
            <span className='click-remember' >Запомнить пороль</span>
        </div>
        <div className='header-basket'>
            <Link to={"/userPage/mainPage"}>
                <Button type={"submit"} classBtn={"btn-registration"} propsText={"Вход"}/>
            </Link>
        </div>
    </div>
  )
}
