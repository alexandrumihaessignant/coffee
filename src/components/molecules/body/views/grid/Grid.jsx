import {useEffect, useState} from 'react';

import Item from './support/Item';

import * as S from './Grid.style';

function Grid(props) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  return (
      <S.Wrapper>
        <S.Grid>
          {items.map((item) => (
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
