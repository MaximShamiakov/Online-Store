import React, {useState}from 'react'
import {Button, Input} from '../index'
import axios from 'axios';
import { setModels } from '../../redux/actions/models';
import { setFilter } from '../../redux/actions/filter';
import { useDispatch, useSelector} from "react-redux";


export default function Filter() {
  const dispatch = useDispatch()
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const { minPrice: itemsFilterMinPrice, maxPrice: itemsFilterMaxPrice } =
    useSelector(({ filter }) => filter);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:8000/products', {
      params: {
        min_price: minPrice,
        max_price: maxPrice
      }
    })
    .then((response) => {
      dispatch(setModels(response.data.data));
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    dispatch(setFilter(minPrice, maxPrice));
  };


  return (
    <form className='popup-filter' onSubmit={handleSubmit}>
      <Input classInput={'input-filter'} placeholder={itemsFilterMinPrice} type={"text"} value={minPrice} onChange={handleMinPriceChange}/>
      <Input classInput={'input-filter'} placeholder={itemsFilterMaxPrice} type={"text"} value={maxPrice} onChange={handleMaxPriceChange}/>
      <Button classBtn={'btn-filter'} onClick={handleSubmit} type={"submit"} propsText={"Фильтр"}/>
    </form>
  )
}
