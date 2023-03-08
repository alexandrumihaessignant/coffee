import {useNavigate, useParams} from "react-router-dom";

import Button from '../../../atoms/Button';

import {AppPaths, AppRoutes} from "../../../../constants/routing/AppRoutes";

import * as S from './CreateButton.style';

function CreateButton() {

  const nav = useNavigate();
  let {category} = useParams();

  const onNavigate = () => {
    const url = category === undefined
        ? AppPaths["hot-coffee"] + AppRoutes.categoryCreatePath
        : "/" + category + AppRoutes.categoryCreatePath;
    nav(url);
  };

  return (
      <S.Wrapper>
        <Button onClick={onNavigate}
                title={'Create'}/>
      </S.Wrapper>
  );
}

export default CreateButton;
