import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from "react-redux";
import { setModels } from '../../redux/actions/models';
import { useSelector } from 'react-redux';
import { setSortBy } from '../../redux/actions/sort';
import { startLoading, stopLoading } from '../isLoadingThunks';

const Product = React.memo(
    function Product(props) {
        const dispatch = useDispatch();
        const [count, setCount] = useState('');
        const onSelectItems = (index, title)=>{
          dispatch(startLoading())
          setCount(index)
          props.onClickItem(index)
          axios.post("http://127.0.0.1:8000/", { title: title})
          .then(response => {
            console.log(response)
            dispatch(setModels(response.data))
            dispatch(setSortBy(null))
            dispatch(stopLoading())
          })
          .catch(error => {
            console.log(error);
          });
              }

          const itemsProduct = useSelector(({productNameReducer})=> productNameReducer.items)
          console.log(itemsProduct)        
          
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
                <div className="exit">выйти</div>
            </Link>
            </div>
      )
    } 
)

export default  Product