import React from 'react'


export default function Input(props) {
  return (
    <div>
        <input
          className={props.classInput}
          type={props.type}
          name=""
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
              />
    </div>
  )
}

