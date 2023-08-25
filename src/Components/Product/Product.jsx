import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from "react-redux";
import { setModels } from '../../redux/actions/models';

const Product = React.memo(
    function Product(props) {
        const dispatch = useDispatch();
        const [count, setCount] = useState('');
        const onSelectItems = (index)=>{
          const category = props.stateProducts[index].title
            setCount(index)
            props.onClickItem(index)
            axios.post("http://127.0.0.1:8000/", { title: category})
      .then(response => {
        console.log(response.data)
        dispatch(setModels(response.data))
      })
      .catch(error => {
        console.log(error);
      });
          }

      return (
            <div id="back" className="column">
              {
                props.stateProducts.map((el, index)=>( <div key={el + el.icons}  className="m">
                <img className="cont img-product" src={el.icons} alt="" />
                <div onClick={()=>{onSelectItems(index)}} className={count === index ? 'cont name-product-active' : 'cont name-product'}>
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