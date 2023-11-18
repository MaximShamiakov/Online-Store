import React from 'react'
import {VisiblePopup, Filter} from '../..'
import {useDispatch} from "react-redux";
import { setSortBy } from '../../../redux/actions/sort';
import { useIsLoadingComponent } from '../../RepeatTheCode/isLoadingThunks';
import { ProductItem } from '../../RepeatTheCode/ProductItem';
import { onAddModels } from '../../RepeatTheCode/onAddModels';


export default function FilterModels(props) {

  const sortBy = props.sortBy
  const dispatch = useDispatch();
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);
  const isLoading = useIsLoadingComponent()

  return (
    <div className="cont description">
      <div className="form">
        <VisiblePopup activeSortText = {sortBy} onClickItem={onSelectSortType} />
        <Filter/>
        { isLoading !== true ? (
        <form className="product-categories">
          <div className="block-img-info">
           {props.modelsFilter.length > 0 ?props.modelsFilter.map((el)=>(
            <ProductItem el={el} onAddModels={()=> onAddModels(props, el, props.onClickAddModels)}/>
           )) : <h1 className="cont component-basket">Товар не найден</h1>
           }
          </div>
        </form>) :
        (<div className="loading">Loading...</div>)}
        </div>
      </div>
  )
}
