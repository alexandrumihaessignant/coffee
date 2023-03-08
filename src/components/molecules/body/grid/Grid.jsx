import {useContext} from "react";

import Item from './support/Item';
import {AppContext} from "../../../../services/AppContext";

import * as S from './Grid.style';

function Grid() {

  const {appCtx} = useContext(AppContext);

  return (
      <S.Wrapper>
        <S.Grid>
          {
            appCtx.activeItems.map((item) => (
                <Item key={item.title}
                      title={item.title}
                      imgSrc={item.imgSrc}
                      description={item.description}></Item>
            ))
          }
        </S.Grid>
      </S.Wrapper>
  );
}

export default Grid;
