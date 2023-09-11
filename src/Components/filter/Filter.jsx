import React, {useState}from 'react'
import {Button, Input} from '../index'
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { modelsFilter } from '../../redux/actions/modelsFilter';


export default function Filter(props) {
  const location = useLocation();
  const dispatch = useDispatch()
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };
  const categoryNumber = useSelector(({ category }) => category.number);
  const productNameList = useSelector(
    ({ productNameReducer }) => productNameReducer.items
  );
  const stateProducts = productNameList[categoryNumber]?.title;
  console.log(stateProducts);
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const { minPrice: itemsFilterMinPrice, maxPrice: itemsFilterMaxPrice } =
    useSelector(({ filter }) => filter);
    console.log(minPrice, maxPrice)
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:8000/filtered', {
      params: {
        min_price: minPrice,
        max_price: maxPrice,
        title: stateProducts
      }
    })
    .then((response) => {
      dispatch(modelsFilter(response.data.data));
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };


  return (

      <div className='popup-filter' onSubmit={handleSubmit}>
        <Input classInput={'input-filter'} placeholder={"Min- цена"} type={"text"} value={minPrice} onChange={handleMinPriceChange}/>
        <Input classInput={'input-filter'} placeholder={"Max- цена"} type={"text"} value={maxPrice} onChange={handleMaxPriceChange}/>
        <div onClick={handleSubmit} className='btn-filter' type={"submit"} text={"Фильтр"}>
          {location.pathname === '/userPage/mainPage/filter' ? (
          <Link to={'/userPage/mainPage/filter'}>Фильтр</Link>
        ) : (
          <Link to={'/userPage/mainPage/filter'}>Фильтр</Link>
        )}
        </div>
      </div>
  )
}
