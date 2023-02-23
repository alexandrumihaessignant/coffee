import {useEffect, useState} from 'react';

import Search from './grid/Search';
import Grid from './grid/Grid';
import CreateButton from './grid/CreateButton';

function GridView(props) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items)
  }, [props.items, props.activeView]);

  return (
      props.display
          ? <>
            <Search filterGrid={props.filterGrid}/>
            <Grid items={items}
                  updateActiveView={props.updateActiveView}/>
            <CreateButton updateActiveView={props.updateActiveView}/>
          </>
          : null
  );
}

export default GridView;
