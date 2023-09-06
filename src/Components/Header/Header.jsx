import React, { useState } from 'react';
import { Button, Input, MenuHeader, Logo } from '..';
import { Link } from 'react-router-dom';


const Header = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = ()=>{
    const obj = {searchTerm}
    props.onSearch(obj)
    }

  return (
    <div className="header">
      <Link to={'/'}>
        <Logo ShopMax={'ShopMax'} />
      </Link>
      <MenuHeader/>
      <form className="cont search">
        <Input
          placeholder={'Введите текст поиска'}
          classInput={'srch'}
          type={'text'}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Link to={'search'}>
          <Button propsText={'поиск'} classBtn={'btn'} onClick={onSearch} />
        </Link>
      </form>
    </div>
  )
}

export default Header;