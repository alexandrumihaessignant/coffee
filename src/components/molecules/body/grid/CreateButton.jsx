import {useNavigate, useParams} from 'react-router-dom';

import Button from '../../../atoms/Button';

import {AppPaths, AppRoutes} from '../../../../constants/routing/AppRoutes';

import * as S from './CreateButton.style';

function CreateButton() {

  const hotCoffeeCreateRoute = AppPaths['hot-coffee'] + AppRoutes.categoryCreatePath;

  const nav = useNavigate();
  let {category} = useParams();

  const onClick = () => {
    const route = buildRoute();
    nav(route);
  };

  const buildRoute = () => {
    const dynamicCreateRoute = '/' + category + AppRoutes.categoryCreatePath;
    return category === undefined
        ? hotCoffeeCreateRoute
        : dynamicCreateRoute;
  }

  return (
      <S.Wrapper>
        <Button onClick={onClick}
                title={'Create'}/>
      </S.Wrapper>
  );
}

export default CreateButton;
