import React from 'react'

export default function Contacts(props) {

    const contacts = [
        {title: "Велком", contacts: "8 (033) 626-04-20"},
        {title: "МТС", contacts: "8 (033) 626-04-20"},
        {title: "Viber", contacts: "8 (033) 626-04-20"},
        {title: "WhatsApp", contacts: "8 (033) 626-04-20"},
        {title: "Telegram", contacts: "8 (033) 626-04-20"},
        {title: "Эл.почта:", contacts: "shamiakov@bk.ru"},
        {title: "OOO 'MaxiMax'", contacts: "г. Могилёв ул. Фатина 8 кв 64"},
        {title: "Skype", contacts: "MaxiMax"},
        {title: "График работы интерент-магазина", contacts: "ПН-Пт: 9:00 - 22:00, Сб-Вс: 10:00 - 20:00"},
    ]
    
  return (
    <div className={props.className}>
        <div className="form">
            
            <form className="input-group">
                <div className="block-img-info">
                    <div className={props.classNameText}>
                        {contacts.map((el)=>(<div><h1 className="text-big-header-information"><span>{el.title}</span> </h1><p className="par">
                        {el.contacts}
                        </p></div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
