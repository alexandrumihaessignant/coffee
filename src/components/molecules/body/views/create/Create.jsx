import {useState} from 'react';

import BackButton from '../../support/BackButton';

import * as SInput from '../../../../atoms/Input.style';

import * as SButtonWrapper from '../../../../atoms/Button.style';
import * as SMain from './Create.style';

const S = {
  ItemCreateForm: SMain.ItemCreateForm,
  Buttons: SMain.Buttons,
  Input: SInput.Input,
  ButtonWrapper: SButtonWrapper.ButtonWrapper
};

function Create(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.updateItems({
      title: name,
      description: description
    })
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
          <BackButton updateActiveView={props.updateActiveView}/>
          <S.ButtonWrapper>
            <input type='submit'
                   value='Create'/>
          </S.ButtonWrapper>
        </S.Buttons>
      </S.ItemCreateForm>
  );
}

export default Create;
