import React from 'react';

const VisiblePopup = (props) => {
  const sortItem = [
    { name: 'Популярности', type: 'popular' },
    { name: 'Цене', type: 'price' },
    { name: 'Алфавиту', type: 'brand' },
  ];
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };
  const onSelectItem = (index) => {
    setVisiblePopup(false);
    props.onClickItem(sortItem[index].type);
    
  };
  const activeSortType = sortItem.find((obj)=>obj.type === props.activeSortText).name

  return (
    <div ref={sortRef} className="popup">
      <div className="sort" onClick={toggleVisiblePopup}>
        Сортировать по:
      </div>
      <span className="sortActiveName">{activeSortType}</span>
      {visiblePopup &&
        sortItem.map((obj, index) => (
          
          <div onClick={() => onSelectItem(index)} className="sortСategories" key={obj.type}>
            {obj.name === activeSortType ? [] : obj.name}
          </div>
        ))}
    </div>
    
  );
};


export default VisiblePopup;
