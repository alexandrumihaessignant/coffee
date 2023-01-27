import Item from './Item';

import * as S from './ItemList.style';

const ItemList = (props) => {

  return (
      props.display
          ? <S.ItemList>
            {props.items.map((item) => (
                <Item key={item.title}
                      title={item.title}
                      imgSrc={item.imgSrc}
                      updateActiveView={props.updateActiveView}></Item>
            ))}
          </S.ItemList>
          : null
  );
}

export default ItemList;
