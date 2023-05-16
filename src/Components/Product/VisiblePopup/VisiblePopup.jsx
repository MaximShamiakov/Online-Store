import React from 'react';

const VisiblePopup = (props) => {
  const sortItem = [
    { name: 'Популярности', type: 'popular' },
    { name: 'Цене', type: 'price' },
    { name: 'Алфавиту', type: 'brand' },
  ];
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  // 1- useRef - делаем ссылку на DOM
  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  // 2 - useEffect - следим за состоянием компонента
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // 4 если path != current то setVisiblePopup(false). Правая часть кода не выполняется
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

  // метод find итерируется по обьектам и сравнивает(возвращает объект, который совпал)
  const activeSortType = sortItem.find((obj)=>obj.type === props.activeSortText).name

  return (
    // 3 - ref - отправляем ссылку sort в useRef
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
