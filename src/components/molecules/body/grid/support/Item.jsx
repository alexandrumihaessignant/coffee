import {useNavigate, useParams} from 'react-router-dom';

import Button from '../../../../atoms/Button';

import {AppPaths, AppRoutes} from '../../../../../constants/routing/AppRoutes';

import * as S from './Item.style';

function Item(props) {

  const nav = useNavigate();
  let {category} = useParams();

  const onClick = (event) => {
    event.preventDefault();
    const url = category === undefined
        ? AppRoutes.HotCoffee + AppPaths.preview + '/' + props.title
        : '/' + category + AppPaths.preview + '/' + props.title;
    nav(url);
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
