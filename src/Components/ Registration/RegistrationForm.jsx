import React, { useState } from 'react'
import {Button} from "../index"
import { Link } from 'react-router-dom'
import axios from "axios";


export default function RegistrationForm(props) {

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { email, username, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // preventDefault () интерфейса Event сообщает User agent,
    // что если событие не обрабатывается явно,
    // его действие по умолчанию не должно выполняться так,
    // как обычно.
    e.preventDefault();
    if (password !== password2) {
      alert("Пароли не совпадают");
      return;
    }

    
    try {
      const res = await axios.post("http://127.0.0.1:8000/new_reg/", formData);
      localStorage.setItem('key', res.data.key)
      localStorage.setItem('name', res.data.name)
      alert("Регистрация прошла успешна");
      
      
      window.location.href = '/userPage/mainPage';
    } catch (err) {
      console.log(err.response.data);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="input-group">
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
            <input type="text" name="username" value={username} onChange={handleChange} className="registration-input-fields" placeholder="Имя пользователя" required/>
            <input type="email" name="email"  value={email} onChange={handleChange} className="registration-input-fields" placeholder="Email" required/>
            <input type="password" name="password" value={password} onChange={handleChange} className="registration-input-fields" placeholder="Пароль"required/>
            <input type="password" name="password2" value={password2} onChange={handleChange} className="registration-input-fields" placeholder="Повторите пароль"required/>
        <div className='header-basket'>
            <button type="submit" className='btn-form-registration'>Зарегистрироваться</button>
        </div>
    </form>
  )
}
