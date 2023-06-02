import React, { useState } from 'react'
import {Button} from "../index"
import { Link } from 'react-router-dom'


export default function RegistrationForm(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    // preventDefault () интерфейса Event сообщает User agent,
    // что если событие не обрабатывается явно,
    // его действие по умолчанию не должно выполняться так,
    // как обычно.
    event.preventDefault();

    const newUser = {
      name,
      email,
      password
    };
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
    
      if (!response.ok) {
        throw new Error('Ошибка при добавлении пользователя');
      }
    
      window.location.href = '/userPage/mainPage';
    } catch (error) {
      console.error(error);
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
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} className="registration-input-fields" placeholder="Имя пользователя" required/>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="registration-input-fields" placeholder="Email" required/>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} className="registration-input-fields" placeholder="Пороль"required/>
        <div className='header-basket'>
            <button type="submit" className='btn-form-registration'>Зарегистрироваться</button>
        </div>
    </form>
  )
}
