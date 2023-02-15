import PagesLinks from './../molecules/nav/PagesLinks';

import * as S from './Nav.style';

function Nav(props) {
  return (
      <S.Nav>
        <PagesLinks updateActiveCategory={props.updateActiveCategory}/>
      </S.Nav>
  );
}

export default Nav;
