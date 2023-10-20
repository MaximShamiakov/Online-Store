import React, { useState } from 'react'
import axios from "axios";
import { API_URL } from '../../config';


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
    e.preventDefault();
    if (password !== password2) {
      alert("Пароли не совпадают");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/new_reg/`, formData);
      localStorage.setItem('key', res.data.key)
      localStorage.setItem('name', res.data.name)
      window.location.href = '/userPage/mainPage';
    } catch (err) {
      console.log(err.response.data);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="data-input">
          <div className="button-box">
            <div className="icons">
                {
                  props.icons.map((el)=>( <a key={el}><ion-icon name={el}></ion-icon></a>))
                }
            </div>
          </div>
            <input type="text" name="username" value={username} onChange={handleChange} className="registration-input-fields" placeholder="Имя пользователя" required/>
            <input type="email" name="email" value={email} onChange={handleChange} className="registration-input-fields" placeholder="Email" required/>
            <input type="password" name="password" value={password} onChange={handleChange} className="registration-input-fields" placeholder="Пароль"required/>
            <input type="password" name="password2" value={password2} onChange={handleChange} className="registration-input-fields" placeholder="Повторите пароль"required/>
        <div className='header-basket'>
            <button type="submit" className='btn-form-registration'>Зарегистрироваться</button>
        </div>
    </form>
  )
}
