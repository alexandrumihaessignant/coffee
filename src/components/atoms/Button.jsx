import * as S from './Button.style';

const Button = (props) => {

  return (
      <S.Button onClick={props.onClick}>
        {props.title}
      </S.Button>
  );
}

export default Button;
