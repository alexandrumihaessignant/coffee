import Button from './../../atoms/Button';

import {ActiveView} from '../../../constants/ActiveView';

import * as S from './CreateItemButton.style';

const CreateItemButton = (props) => {

  const onClick = (event) => {
    event.preventDefault();
    props.updateActiveView({
      activeView: ActiveView.Create,
      previewTitle: null,
      previewImgSrc: null
    });
  }

  return (
      props.display ?
          <S.Wrapper>
            <Button onClick={onClick}
                    title={'Create'}/>
          </S.Wrapper>
          : null
  );
}

export default CreateItemButton;
