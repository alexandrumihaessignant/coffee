import Item from './support/Item';

import * as S from './Grid.style';

const Grid = (props) => {

  return (
      <S.Wrapper>
        <S.Grid>
          {props.items.map((item) => (
              <Item key={item.title}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    description={item.description}
                    updateActiveView={props.updateActiveView}></Item>
          ))}
        </S.Grid>
      </S.Wrapper>
  );
}

export default Grid;
