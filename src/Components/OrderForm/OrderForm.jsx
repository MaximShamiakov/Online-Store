import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'


const sendInput = [
    {type: "text", placeholder: "Фамилия"},
    {type: "text", placeholder: "Имя"},
    {type: "text", placeholder: "Отчество"},
    {type: "telephone", placeholder: "Телефон"},
    {type: "email", placeholder: "Email"},
    {type: "text", placeholder: "Город"},
    {type: "text", placeholder: "Адрес"},
    {type: "text", placeholder: "Комментарий"}
]

export default function OrderForm(props) {
  return (
    <div className="cont description">
        <div className="form">
            <div className="btn-back">
                <Link to={'/userPage/componentsBasket'}>
                    <Button  classBtn={"toggle-btn-card-1"} propsText={"Назад"}/>
                </Link>
            </div>
            <form  className="input-group-card">
                <div className="form-send">
                {
                    sendInput.map((el)=>(<Input key={el.placeholder} type={el.type} classInput={"input-field"} placeholder={el.placeholder}/>))
                }
                </div>
                <div>
                    <Button  classBtn={"toggle-btn-card-1"} propsText={"Отправить"}/>
                </div>
            </form>                 
        </div>
    </div> 
  )
}



