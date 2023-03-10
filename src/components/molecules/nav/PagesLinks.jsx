import {NavLink} from 'react-router-dom';

import {AppPaths} from '../../../constants/routing/AppRoutes';

import * as S from './PagesLinks.style';

function PagesLinks() {

  function buildClassName() {
    return ({isActive}) => (isActive ? 'selected' : '');
  }

  return (
      <S.PagesLinks>
        <li>
          <NavLink to={AppPaths['hot-coffee']}
                   className={buildClassName()}>
            Hot Coffee
          </NavLink>
        </li>
        <li>
          <NavLink to={AppPaths['iced-coffee']}
                   className={buildClassName()}>
            Iced Coffee
          </NavLink>
        </li>
        <li>
          <NavLink to={AppPaths['desserts']}
                   className={buildClassName()}>
            Desserts
          </NavLink>
        </li>
      </S.PagesLinks>
  );
}

export default PagesLinks;
