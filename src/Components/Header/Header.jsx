import React from 'react'
import {Button, Input, MenuHeader, Logo} from '..'


const hello = ()=> {
  alert ('hello Max')
}

const Header =()=> {
  return (
    <div className="header">
            <Logo ShopMax = {'ShopMax'}/>
        <MenuHeader onClickMenuHeader={(text) => {
            console.log(text);
          }} />
        <form className="cont search" action="https://www.google.com/search?q=username" method="get">
            <Input placeholder={'Введите текст поиска'} classInput={'srch'} type={'text'}/>
            <Button propsText={'поиск'} classBtn={'btn'} onClick={hello}/>
        </form>
    </div>
  )
}

export default Header