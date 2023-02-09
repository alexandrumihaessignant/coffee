import ItemPreviewBackButton from './ItemPreviewBackButton';
import Button from "../../atoms/Button";

import * as S from './ItemPreview.style';

const ItemPreview = (props) => {

  return (
      props.display
          ? <S.Wrapper>
            <S.Preview>
              <p id='ItemPreviewTitle'>{props.title}
              </p>
              <S.Content>
                <img src={props.imgSrc}/>
                <div>
                  <p>Description:</p>
                  <p>{
                    props.description !== undefined
                        ? props.description
                        : `No description has been found.`
                  }</p>
                </div>
              </S.Content>
            </S.Preview>
            <S.Buttons>
              <ItemPreviewBackButton updateActiveView={props.updateActiveView}/>
              <Button title={'Edit'}/>
            </S.Buttons>
          </S.Wrapper>
          : null
  );
}

export default ItemPreview;
