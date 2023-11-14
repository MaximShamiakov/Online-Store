import React, { useEffect } from 'react'
import Header from '../Header/Header'
import {Delivery, Service, Contacts, Design, MainInformation, RegistrationForm, AuthenticationForm} from "../index"
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { regDescription } from '../../redux/actions/regDescription';
import { contacts } from '../../redux/actions/сontacts'; 
import { delivery } from '../../redux/actions/delivery'; 
import { service } from '../../redux/actions/service'; 
import { design } from '../../redux/actions/design';
import { startLoading, stopLoading } from '../UseIsLoading/isLoadingThunks';
import { API_URL } from '../../config';
import { useIsLoading } from '../UseIsLoading/useIsLoading';


export default function Registration() {
  const dispatch = useDispatch()
  const icons = [
    "logo-facebook",
    "logo-instagram",
    "logo-twitter",
    "logo-google",
    "logo-skype"
  ]
  const [activeForm, setActiveForm] = useState('registration');
  useEffect(() => {
    const actions = {
      regDescription,
      delivery,
      service,
      design,
      contacts,
    }
    const information = [
      {name:"regDescription"},
      {name:"delivery"},
      {name:"service"},
      {name:"design"},
      {name:"contacts"},
    ]
  
    information.forEach(item => {
      dispatch(startLoading())
      axios.post(`${API_URL}/${item.name}/`).then((response) => {
        dispatch(actions[item.name](response.data))
        dispatch(stopLoading())
      })
    })
  }, [dispatch])

  const isLoading = useIsLoading()

  return (
    <div className="main">
      { isLoading !== true ?(
        <div className="wrap">
            <Header />
            <div className="registration-block">
              <Routes>
                  <Route path="/*" element={<MainInformation classNameProps={'block-of-text'} />} />
                  <Route path="delivery/*" element={<Delivery classNameProps={'block-of-text'}/>} />
                  <Route path="service/*" element={<Service classNameProps={'block-of-text'}/> } />
                  <Route path="contacts/*" element={<Contacts classNameProps={'block-of-text'}/>} />
                  <Route path="design/*" element={<Design classNameProps={'block-of-text'}/>}/>
              </Routes>
              <div className="block-form-registration-authorization">
                <div className="form-registration-authorization">
                  <div className='login-and-register-btn'>
                    {activeForm === 'registration' ? (
                        <button className="btn-registration" onClick={() => setActiveForm('authentication')}>Вход</button>
                      ) : (
                        <button className="btn-registration" onClick={() => setActiveForm('registration')}>Регистрация</button>
                      )}
                  </div>

                  {activeForm === 'registration' ? (
                    <RegistrationForm icons={icons} />
                  ) : (
                    <AuthenticationForm icons={icons} />
                  )}
                </div>
              </div>
            </div>
        </div>) :
        (<div className="loading">Loading...</div>)
        }
    </div>
  )
}

