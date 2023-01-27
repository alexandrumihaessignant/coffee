import Button from './../../atoms/Button';
import {ActiveView} from '../../organisms/Body';

const ItemPreviewBackButton = (props) => {

  const onClick = (event) => {
    event.preventDefault();
    props.updateActiveView({
      activeView: ActiveView.List,
      previewTitle: null,
      previewImgSrc: null
    });
  }

  return (
      <Button onClick={onClick}
              title={'Back'}/>
  );
}

export default ItemPreviewBackButton;