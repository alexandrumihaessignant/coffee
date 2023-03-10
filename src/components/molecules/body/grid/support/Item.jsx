import {useNavigate, useParams} from 'react-router-dom';

import Button from '../../../../atoms/Button';

import {AppPaths} from '../../../../../constants/routing/AppRoutes';

import * as S from './Item.style';

function Item(props) {

  const nav = useNavigate();
  let {category} = useParams();

  const onClick = (event) => {
    event.preventDefault();
    const hotCoffeePreviewRoute = AppPaths['hot-coffee'] + AppPaths.preview + '/' + props.title;
    const dynamicPreviewRoute =  '/' + category + AppPaths.preview + '/' + props.title;
    const route = category === undefined
        ? hotCoffeePreviewRoute
        : dynamicPreviewRoute;
    nav(route);
  }

  return (
      <S.Item>
        <img src={props.imgSrc}>
        </img>
        <Button onClick={onClick}
                title={props.title}/>
      </S.Item>
  );
}

export default Item;
