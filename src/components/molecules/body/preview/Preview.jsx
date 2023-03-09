import Button from '../../../atoms/Button';

import * as S from './Preview.style';
import BackButton from '../support/BackButton';

function Preview(props) {

  return (
      <S.Wrapper>
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
          <BackButton/>
          <Button title={'Edit'}/>
        </S.Buttons>
      </S.Wrapper>
  );
}

export default Preview;