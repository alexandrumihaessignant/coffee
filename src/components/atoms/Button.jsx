import * as S from './Button.style';

const Button = (props) => {

  return (
      <S.ButtonWrapper>
        <button onClick={props.onClick}>
          {props.title}
        </button>
      </S.ButtonWrapper>
  );
}

export default Button;
