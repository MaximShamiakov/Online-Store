import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from "react-redux";
import { setModels } from '../../redux/actions/models';
import { useSelector } from 'react-redux';
import { setSortBy } from '../../redux/actions/sort';
import { API_URL } from '../../config';

const Product = React.memo(
    function Product(props) {
        const dispatch = useDispatch();
        const [count, setCount] = useState('');
        const onSelectItems = (index, title)=>{
          setCount(index)
          props.onClickItem(index)
          axios.post(`${API_URL}/`, { title: title})
          .then(response => {
            dispatch(setModels(response.data))
            dispatch(setSortBy(null))
          })
          .catch(error => {
            console.log(error);
          });
              }
          const itemsProduct = useSelector(({productNameReducer})=> productNameReducer.items)          
          const handleClick = ()=>{
            localStorage.removeItem('key');
            localStorage.removeItem('name');
          }
      return (
            <div id="back" className="column">
              {
                itemsProduct.map((el, index)=>( <div key={el + el.icons}  className="m">
                <img className="cont img-product" src={el.icons} alt="" />
                <div onClick={()=>{onSelectItems(index, el.title)}} className={count === index ? 'cont name-product-active' : 'cont name-product'}>
                <Link className='cont name-product' to={"mainPage"}>{el.products}</Link>
                </div>
              </div>))
              }
            <Link className='cont name-product' to={"/"}>
                <div onClick={handleClick} className="exit">выйти</div>
            </Link>
            </div>
      )
    } 
)

export default  Product