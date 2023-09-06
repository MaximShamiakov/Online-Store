import React from 'react'
import { useSelector } from 'react-redux'


export default function Service(props) {
  const itemsService = useSelector(({ serviceReducer }) => serviceReducer.items)

  return (
        <div className={props.classNameProps}>
            <div className="text-reg">
              {itemsService.map((el)=>(<div key={el.information}><h1 className="text-big-info"><span>{el.header}</span><br/></h1>
                <div>
                  <p className="par">{el.information}</p>
                </div></div>))}
            </div>
        </div>
  )
}