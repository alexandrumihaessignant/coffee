import {useNavigate, useParams} from 'react-router-dom';

import Button from '../../../../atoms/Button';

import {AppPaths} from '../../../../../constants/routing/AppRoutes';

import * as S from './Item.style';

function Item(props) {

  const defaultImgSrc = require('./../../../../../assets/default-item.png');

  const nav = useNavigate();
  let {category} = useParams();

  const buildImgSrc = () => {
    return props.imgSrc === null
        ? defaultImgSrc
        : props.imgSrc;
  }

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
        <img src={buildImgSrc()}>
        </img>
        <Button onClick={onClick}
                title={props.title}/>
      </S.Item>
  );
}

export default Item;
