import {useContext, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import BackButton from '../support/BackButton';

import {AppContext} from '../../../../services/AppContext';
import {ActiveCategory} from '../../../../constants/ActiveCategory';

import * as SMain from './Create.style';
import * as SInput from '../../../atoms/Input.style';
import * as SButtonWrapper from '../../../atoms/Button.style';

const S = {
  ItemCreateForm: SMain.ItemCreateForm,
  Buttons: SMain.Buttons,
  Input: SInput.Input,
  ButtonWrapper: SButtonWrapper.ButtonWrapper
};

function Create() {

  const {appCtx, setAppCtx} = useContext(AppContext);
  const nav = useNavigate();
  let {category} = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addNewItem();
    nav('/' + category);
  }

  const addNewItem = () => {
    let tempContext = {...appCtx};
    tempContext.items[category].push({
      title: name,
      imgSrc: null,
      description: description
    });
    setAppCtx(tempContext);
  }

  return (
      <S.ItemCreateForm onSubmit={onSubmit}>
        <S.Input type='text'
                 name='name'
                 placeholder='Name'
                 onChange={onChangeName}/>
        <S.Input type='text'
                 name='description'
                 placeholder='Description'
                 onChange={onChangeDescription}/>
        <S.Buttons>
          <BackButton/>
          <S.ButtonWrapper>
            <input type='submit'
                   value='Create'/>
          </S.ButtonWrapper>
        </S.Buttons>
      </S.ItemCreateForm>
  );
}

export default Create;
