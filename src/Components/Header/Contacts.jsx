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
        <div className={props.classNameProps}>
            <div className="text-reg">
            {contacts.map((el)=>(<div key={el.title}><h1 className="text-big-info"><span>{el.title}</span> </h1><div><p className="par">
                        {el.contacts}
                        </p></div></div>
                        ))}
            </div>
        </div>
  )
}


