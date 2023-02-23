import Button from '../../../atoms/Button';

import {ActiveView} from '../../../../constants/ActiveView';

function BackButton(props) {

  const onClick = (event) => {
    event.preventDefault();
    props.updateActiveView({
      activeView: ActiveView.Grid,
      previewTitle: null,
      previewImgSrc: null,
      previewDescription: null
    });
  }

  return (
      <Button onClick={onClick}
              title={'Back'}/>
  );
}

export default BackButton;
