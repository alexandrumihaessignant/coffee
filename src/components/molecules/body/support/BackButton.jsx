import {useNavigate} from 'react-router-dom';

import Button from '../../../atoms/Button';

function BackButton() {

  const nav = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    nav(-1);
  };

  return (
      <Button onClick={onClick}
              title={'Back'}/>
  );
}

export default BackButton;
