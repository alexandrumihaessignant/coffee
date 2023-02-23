import {useState} from 'react';

import * as SInput from '../../../../atoms/Input.style';
import * as SButtonWrapper from '../../../../atoms/Button.style';

import * as SMain from './Create.style';

const S = {
  ItemCreateForm: SMain.ItemCreateForm,
  Input: SInput.Input,
  ButtonWrapper: SButtonWrapper.ButtonWrapper
};

function Create(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateActiveView({
      title: name,
      description: description
    })
  }

  return (
      <S.ItemCreateForm onSubmit={handleSubmit}>
        <S.Input type='text'
                 name='name'
                 placeholder='Name'
                 onChange={handleNameChange}/>
        <S.Input type='text'
                 name='description'
                 placeholder='Description'
                 onChange={handleDescriptionChange}/>
        <S.ButtonWrapper>
          <input type='submit'
                 value='Create'/>
        </S.ButtonWrapper>
      </S.ItemCreateForm>
  );
}

export default Create;
