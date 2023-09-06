import React from 'react'
import { useSelector } from 'react-redux'

export default function Contacts(props) {

    const itemsContacts = useSelector(({ contactsReducer }) => contactsReducer.items);

    return (
            <div className={props.classNameProps}>
                <div className="text-reg">
                {itemsContacts.map((el)=>(<div key={el.name}><h1 className="text-big-info"><span>{el.name}</span> </h1><div><p className="par">
                            {el.contacts}
                            </p></div></div>
                            ))}
                </div>
            </div>
    )
    }


