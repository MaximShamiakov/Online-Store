import React, {useState} from "react"
import { Link } from "react-router-dom"
import {Button} from "../index"
export default function AuthenticationForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  // async эта функция гарантирует всегда возвращать промисы. 
    const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        // await После завершения асинхронной операции оператор await возвращает результат операции, если таковой имеется.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Ошибка при аутентификации');
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      window.location.href = '/userPage/mainPage';
    } catch (error) {
      console.error(error);
    }
  };
  

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
