import React, {useState, useEffect} from "react"
import axios from "axios";

export default function AuthenticationForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const key = localStorage.getItem('key');
  //   if (key) {
  //     setIsLoggedIn(true);
  //   }
  //   setIsLoading(false);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:8000/new_login/", { email, password })
      if (res.status !== 200){
        alert('не верный логин или пароль')
      }
      else {
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('key', res.data.key)
        // setIsLoggedIn(true);
        window.location.href = "/userPage/mainPage"
      }
    }catch (err) {
      console.log(err)
    }
  }


  return (
    <form onSubmit={handleSubmit} className="data-input">
        <div className="button-box">
          <div className="icons">
              {
                props.icons.map((el)=>(<a key={el} ><ion-icon name={el}></ion-icon></a>))
              }
          </div>
        </div>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="registration-input-fields" placeholder={"Email"} required/>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} className="registration-input-fields" placeholder={"Пороль"} required/>
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

