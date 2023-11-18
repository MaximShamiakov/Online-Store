import React from 'react'
import { ProductItem } from '../../RepeatTheCode/ProductItem'
import { onAddModels } from '../../RepeatTheCode/onAddModels'


export default function Search(props) {

      return (
        <div className="cont description">
          <div className="form">    
            <form className="product-categories">
              <div className="block-img-info">
                {
                props.itemsModels.length > 0 ? props.itemsModels.map((el)=>(
                  <ProductItem el={el} onAddModels={() => onAddModels(el, props, props.onClickAddModels)}/>
                )) : <h1 className="cont component-basket">Товар не найден</h1>
                    }
                </div>
              </form>
            </div>
          </div>
      )
}
