import {useParams} from 'react-router-dom';

function ItemNotFound() {

  let {category} = useParams();

  return (
      <>
        <h3>404</h3>
        <p>Ooooops!</p>
        <p>Item Not Found</p>
        <p>The item from <b>{category}</b> category does not exist or was removed.</p>
      </>
  );
}

export default ItemNotFound;
