import {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Search from '../../components/molecules/body/grid/Search';
import Grid from '../../components/molecules/body/grid/Grid';
import CreateButton from '../../components/molecules/body/grid/CreateButton';

import {AppContext} from '../../services/AppContext';
import {ActiveCategory} from '../../constants/ActiveCategory';

function GridPage() {

  const {appCtx, setAppCtx} = useContext(AppContext);
  const {category} = useParams();

  const activeCategory = category || ActiveCategory.HotCoffee;
  const itemsFromCategory = appCtx.items[activeCategory];

  useEffect(() => {
    updateActiveItems();
  }, [itemsFromCategory]);

  function updateActiveItems() {
    let tempContext = {...appCtx};
    tempContext['activeItems'] = itemsFromCategory;
    setAppCtx(tempContext);
  }

  return (
      <>
        <Search/>
        <Grid/>
        <CreateButton/>
      </>
  );
}

export default GridPage;
