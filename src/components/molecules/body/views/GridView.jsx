import Search from './grid/Search';
import Grid from './grid/Grid';
import CreateButton from './grid/CreateButton';

const GridView = (props) => {

  return (
      props.display
          ? <>
            <Search filterGrid={props.filterGrid}/>
            <Grid items={props.items}
                  updateActiveView={props.updateActiveView}/>
            <CreateButton updateActiveView={props.updateActiveView}/>
          </>
          : null
  );
}

export default GridView;
