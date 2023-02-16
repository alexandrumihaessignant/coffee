import Button from '../../../../atoms/Button';

import {ActiveView} from '../../../../../constants/ActiveView';

import * as S from './CreateButton.style';

const CreateButton = (props) => {

  const onClick = (event) => {
    event.preventDefault();
    props.updateActiveView({
      activeView: ActiveView.Create,
      previewTitle: null,
      previewImgSrc: null
    });
  }

  return (
      <S.Wrapper>
        <Button onClick={onClick}
                title={'Create'}/>
      </S.Wrapper>
  );
}

export default CreateButton;
