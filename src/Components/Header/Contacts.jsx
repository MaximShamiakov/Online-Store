import React from 'react'

export default function Contacts(props) {
  return (
    <div className={props.className}>
        <div className="form">
            
            <form className="input-group">
                <div className="block-img-info">
                    <div className={props.classNameText}>
                        <h1 className="text-big-header-information"><span>Велком</span> </h1>
                        <p className="par">
                        8 (033) 626-04-20
                        </p>
                        <h1 className="text-big-header-information"><span>МТС</span> </h1>
                        <p className="par">
                        8 (033) 626-04-20
                        </p>
                        <h1 className="text-big-header-information"><span>Viber</span> </h1>
                        <p className="par">
                        8 (033) 626-04-20
                        </p>
                        <h1 className="text-big-header-information"><span>Telegram</span> </h1>
                        <p className="par">
                            8 (033) 626-04-20 
                        </p>
                        <h1 className="text-big-header-information"><span>Viber</span> </h1>
                        <p className="par">
                        8 (033) 626-04-20
                        </p>
                        <h1 className="text-big-header-information"><span>Эл.почта:</span> </h1>
                        <p className="par">
                            shamiakov@bk.ru
                        </p>
                        <h1 className="text-big-header-information"><span>OOO 'MaxiMax'</span> </h1>
                        <p className="par">
                        г. Могилёв ул. Фатина 8 кв 64
                        </p>
                        <h1 className="text-big-header-information"><span>Skype</span> </h1>
                        <p className="par">
                        MaxiMax
                        </p>
                        <h1 className="text-big-header-information"><span>График работы интерент-магазина</span> </h1>
                        <p className="par">
                        ПН-Пт: 9:00 - 22:00,
                        Сб-Вс: 10:00 - 20:00
                        </p>                
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
