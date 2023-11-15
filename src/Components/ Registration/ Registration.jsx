import React from 'react'
import Header from '../Header/Header'
import {Delivery, Service, Contacts, Design, MainInformation, RegistrationForm, AuthenticationForm} from "../index"
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { useIsLoading } from '../UseIsLoading/isLoadingThunks';
import { ApiDataFetcher } from '../apiDataFetcher';


export default function Registration() {
  const icons = [
    "logo-facebook",
    "logo-instagram",
    "logo-twitter",
    "logo-google",
    "logo-skype"
  ]
  const [activeForm, setActiveForm] = useState('registration');

  ApiDataFetcher()

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

