import React, {useState} from 'react'
import {VisiblePopup, Filter} from '../..'
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios';
import { setModels } from '../../../redux/actions/models';
import { actionsPage } from '../../../redux/actions/page';
import { setSortBy } from '../../../redux/actions/sort';
import { API_URL } from '../../../config';
import { useIsLoadingComponent } from '../../RepeatTheCode/isLoadingThunks';
import { ProductItem } from '../../RepeatTheCode/ProductItem';
import { onAddModels } from '../../RepeatTheCode/onAddModels';



export default function FilterModels(props) {
  const categorys = [
    "tv",
    "telephone",
    "computers",
    "kitchen",
    "audio",
    "game",
    "sport",
    "photoVideo"
  ]
  const sortBy = props.sortBy
  const dispatch = useDispatch();

  const pageRedux = useSelector(({ page }) => page.items);
  const [title, setTitle] = useState(null);
  const handleScroll = (event) => {
    setTitle(props.stateProducts);
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      axios.post(`${API_URL}/material/`, { title: title , page: pageRedux})
        .then(response => {
          dispatch(setModels(response.data));
          dispatch(actionsPage(null));
          if (sortBy) {
            dispatch(setSortBy(sortBy))
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  const isLoading = useIsLoadingComponent()

  return (
    <div className="cont description">
      { isLoading !== true ? (
      <div className="form" onScroll={handleScroll} >
        <VisiblePopup activeSortText = {sortBy}/>
        <Filter/>
        <form className="product-categories">
          <div className="block-img-info">
            {
            props.itemsModels.map((el)=>( el.title === categorys[props.categoryNumber] &&
            <ProductItem el={el} onAddModels={()=> onAddModels(props, el, props.onClickAddModels)}/>
            ))
                }
            </div>
          </form>
        </div>) : (
          <div className="loading">Loading...</div>
        )}
      </div>
  )
}
