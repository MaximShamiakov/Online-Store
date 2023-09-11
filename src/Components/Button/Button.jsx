import React from "react";


const Button = ({onClick, classBtn, text, type})=>{
    return(
        <div type={type} onClick={onClick} className={classBtn}>{text}</div>
    )
}

export default Button