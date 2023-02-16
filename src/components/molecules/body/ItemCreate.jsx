import * as SInput from './../../atoms/Input.style';
import * as SButtonWrapper from './../../atoms/Button.style';
import * as S from './ItemCreate.style';

const ItemCreate = (props) => {

  return (
      props.display
          ? <S.ItemCreateForm>
            <SInput.Input type="text"
                          name="name"
                          placeholder='Name'/>
            <SInput.Input type="text"
                          name="description"
                          placeholder='Description'/>
            <SButtonWrapper.ButtonWrapper>
              <input type="submit"
                     value="Create"/>
            </SButtonWrapper.ButtonWrapper>
          </S.ItemCreateForm>
          : null
  );
}

export default ItemCreate;
