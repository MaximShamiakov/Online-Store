import React, {useState} from 'react'
import { Link} from 'react-router-dom';

const Product = React.memo(
    function Product(props) {
        const [count, setCount] = useState(null);
        const onSelectItems = (index)=>{
            setCount(index)
            props.onClickItem(index) 
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