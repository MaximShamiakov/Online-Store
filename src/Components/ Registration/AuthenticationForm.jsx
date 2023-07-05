import React, {useState} from "react"
import { Link } from "react-router-dom"
import {Button} from "../index"
import axios from "axios";
import { addModelsToCart } from "../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";

export default function AuthenticationForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res =  await axios.post("http://127.0.0.1:8000/new_login/", { email, password })
      if (res.status !== 200){
        alert('не верный логин или пароль')
      }
      else {
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('key', res.data.key)
        window.location.href = "/userPage/mainPage"
        res.data.products.forEach(function(product) {
          const obj = {'id': product.idProduct, 'name': product.name, 'img': product.img, 'brand': product.brand, 'price': product.price}
          dispatch(addModelsToCart(obj))
        });
      }
    }catch (err) {
      console.log(err)
    }
  }
  

  return (
    <form onSubmit={handleSubmit} className="input-group">
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
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}  className="registration-input-fields" placeholder={"Email"} required/>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} className="registration-input-fields" placeholder={"Пороль"} required/>
        </div>
        <div className='block-checkbox'>
            <input type="checkbox" className="checkbox"/>
            <span className='click-remember' >Запомнить пороль</span>
        </div>
        <div className='header-basket'>
            <button type="submit" className="btn-registration">Войти</button>
        </div>
    </form>
  )
}

