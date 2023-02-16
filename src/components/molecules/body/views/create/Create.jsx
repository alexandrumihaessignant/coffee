import * as SInput from '../../../../atoms/Input.style';
import * as SButtonWrapper from '../../../../atoms/Button.style';

import * as SMain from './Create.style';

const S = {
  ItemCreateForm: SMain.ItemCreateForm,
  Input: SInput.Input,
  ButtonWrapper: SButtonWrapper.ButtonWrapper
};

const Create = () => {

  return (
      <S.ItemCreateForm>
        <S.Input type='text'
                      name='name'
                      placeholder='Name'/>
        <S.Input type='text'
                      name='description'
                      placeholder='Description'/>
        <S.ButtonWrapper>
          <input type='submit'
                 value='Create'/>
        </S.ButtonWrapper>
      </S.ItemCreateForm>
  );
}

export default Create;
