import {useContext} from 'react';

import Item from './support/Item';

import {AppContext} from '../../../../services/AppContext';

import * as S from './Grid.style';

function Grid() {

  const {appCtx} = useContext(AppContext);

  function buildItems() {
    return appCtx.activeItems.map((item) => (
        <Item key={item.title}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}></Item>
    ));
  }

  return (
      <S.Wrapper>
        <S.Grid>
          {buildItems()}
        </S.Grid>
      </S.Wrapper>
  );
}

export default Grid;
