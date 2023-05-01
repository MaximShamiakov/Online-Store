import React from 'react'
import Header from '../Header/Header'
import {RegBtnLearnMore, StoreInformation, Delivery, Service, Contacts, Desing} from "../index"
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function  Registration() {
  const icons = [
    "logo-facebook", "logo-instagram",
    "logo-twitter",
    "logo-google",
    "logo-skype"
  ]
  
  const classNameDescription = "description-registration"
  const classNameText = "home-header-information"

  return (
    <div className="main">
        <div className="wrap">
            <Header />
            <Link to={'/'}>
                <div className='menuText
                '>../ на главную</div>
            </Link>
            <Routes>
                <Route path="/*" element={<StoreInformation icons={icons}/>} />
                <Route path ="regBtnLearnMore/*" element={<RegBtnLearnMore icons={icons}/>} />
                <Route path="delivery" element={<Delivery className={classNameDescription} classNameText={classNameText}/>} />
                <Route path="service" element={<Service className={classNameDescription} classNameText={classNameText}/>} />
                <Route path="contacts" element={<Contacts className={classNameDescription} classNameText={classNameText}/>} />
                <Route path="desing" element={<Desing className={classNameDescription} classNameText={classNameText}/>}/>
            </Routes>
        </div>
    </div>
  )
}
