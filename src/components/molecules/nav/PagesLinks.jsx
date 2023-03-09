import {Link} from 'react-router-dom';

import {AppPaths} from '../../../constants/routing/AppRoutes';

import * as S from './PagesLinks.style';

function PagesLinks() {

  return (
      <S.PagesLinks>
        <li>
          <Link to={AppPaths['hot-coffee']}>
            Hot Coffee
          </Link>
        </li>
        <li>
          <Link to={AppPaths['iced-coffee']}>
            Iced Coffee
          </Link>
        </li>
        <li>
          <Link to={AppPaths['desserts']}>
            Desserts
          </Link>
        </li>
      </S.PagesLinks>
  );
}

export default PagesLinks;
