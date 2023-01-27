import {ActiveView} from "../../organisms/Body";

import Button from './../../atoms/Button';

import * as S from './Item.style';

const Item = (props) => {

  const onClick = (event) => {
    event.preventDefault();
    props.updateActiveView({
      activeView: ActiveView.Preview,
      previewTitle: props.title,
      previewImgSrc: props.imgSrc
    });
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
