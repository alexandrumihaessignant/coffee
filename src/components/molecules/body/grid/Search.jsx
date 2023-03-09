
import {useContext} from 'react';
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

  const activeCategory = category || ActiveCategory.HotCoffee;

  const handleFilterGrid = (event) => {
    const filterText = event.target.value;
    let filteredItems = [];
    appCtx.items[activeCategory].forEach(item => {
      if(item.title.toLowerCase().includes(filterText.toLowerCase())) {
        filteredItems.push(item);
      }
    });

    let tempContext = {...appCtx};
    tempContext['activeItems'] = filteredItems;
    setAppCtx(tempContext);
  };

  return (
      <S.Search>
        <form>
          <S.Input placeholder='Search by name'
                   onChange={handleFilterGrid}/>
        </form>
      </S.Search>
  );
}

export default Search;
