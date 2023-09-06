import React from 'react'
import { useSelector } from 'react-redux'


export default function MainInformation(props) {
  const description = useSelector(({ descriptionReducer }) => descriptionReducer.items);
  console.log(description)

  return (
        <div className={props.classNameProps}>
            <div className="text-reg">
              {description.map((el)=>(<div key={el.information}><h1 className="text-big">{el.header1}<br/><span>{el.span}</span> <br/>{el.header2}</h1>
                <p className="par">{el.information}</p></div>))}
            </div>
        </div>


  )
}


