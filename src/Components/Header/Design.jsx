import React from 'react'
import { useSelector } from 'react-redux'


export default function Desing(props) {

  const itemsDesign = useSelector(({ designReducer }) => designReducer.items);
  
  return (
        <div className={props.classNameProps}>
            <div className="text-reg">
              {itemsDesign.map((el)=>(<div key={el.information}><h1 className="text-big-info"><span>{el.header}</span> </h1>
            <div>
              <p className="par">{el.information}</p>
            </div></div>))}
            </div>
        </div>
  )
}


