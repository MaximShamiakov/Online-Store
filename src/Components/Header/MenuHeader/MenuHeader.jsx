import React from 'react'
import { Link } from 'react-router-dom'


export default function MenuHeader(props) {

  const menu = [
    {text:"ДОСТАВКА", to:"delivery"},
    {text:"СЕРВЕС", to:"service"},
    {text:"ДИЗАЙН", to:"design"},
    {text:"КОНТАКТЫ", to:"contacts"},
  ]

  return (
    <div className="cont menu">
        <ul>
          {
            menu.map((el)=>(<li key={el.text}><Link to={el.to}><div className='menuText'>{el.text}</div></Link></li>))
          }
        </ul>
    </div>
  )
}
