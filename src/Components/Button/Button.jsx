import React from "react";


const Button = ({onClick, classBtn, propsText, type})=>{
    return(
        <div type={type} onClick={onClick} className={classBtn}>{propsText}</div>
    )
}

export default Button