
import {useContext, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';

import {AppContext} from '../../../../services/AppContext';
import {ActiveCategory} from '../../../../constants/ActiveCategory';

import * as SMain from './Search.style';
import * as SInput from '../../../atoms/Input.style';

const S = {
  Search: SMain.Search,
  Input: SInput.Input
};

function Search() {

  const { appCtx, setAppCtx } = useContext(AppContext);
  const {category} = useParams();
  const input = useRef();

  const activeCategory = category || ActiveCategory.HotCoffee;

  const handleFilterGrid = (event) => {
    const filterText = event.target.value;
    let filteredItems = computeFilteredItems(filterText);
    let tempContext = {...appCtx};
    tempContext['activeItems'] = filteredItems;
    setAppCtx(tempContext);
  };

  const computeFilteredItems = (filterText) => {
    let filteredItems = [];
    appCtx.items[activeCategory].forEach(item => {
      if (item.title.toLowerCase().includes(filterText.toLowerCase())) {
        filteredItems.push(item);
      }
    });
    return filteredItems;
  }

  useEffect(() => {
    clearInputValue();
  }, [category]);

  const clearInputValue = () => {
    input.current.value = '';
  };

  return (
      <S.Search>
        <form>
          <S.Input ref={input}
                   placeholder='Search by name'
                   onChange={handleFilterGrid}/>
        </form>
      </S.Search>
  );
}

export default Search;
