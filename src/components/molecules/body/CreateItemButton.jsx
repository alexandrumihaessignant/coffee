import Button from './../../atoms/Button';

import {ActiveView} from '../../../constants/ActiveView';

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
          <Button onClick={onClick}
                  title={'Create'}/>
          : null
  );
}

export default CreateItemButton;
