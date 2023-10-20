import React, {useState}from 'react'
import {Input} from '../index'
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { modelsFilter } from '../../redux/actions/modelsFilter';
import { API_URL } from '../../config';


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
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`${API_URL}/filtered`, {
      params: {
        min_price: minPrice,
        max_price: maxPrice,
        title: stateProducts
      }
    })
    .then((response) => {
      dispatch(modelsFilter(response.data.data));
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (

      <div className='popup-filter' onSubmit={handleSubmit}>
        <Input classInput={'input-filter'} placeholder={"Min- цена"} type={"text"} value={minPrice} onChange={handleMinPriceChange}/>
        <Input classInput={'input-filter'} placeholder={"Max- цена"} type={"text"} value={maxPrice} onChange={handleMaxPriceChange}/>
        <div onClick={handleSubmit} className='btn-filter' type={"submit"} >
          {location.pathname === '/userPage/mainPage/filter' ? (
          <Link className='link-filter' to={'/userPage/mainPage/filter'}>Фильтр</Link>
        ) : (
          <Link className='link-filter' to={'/userPage/mainPage/filter'}>Фильтр</Link>
        )}
        </div>
      </div>
  )
}
