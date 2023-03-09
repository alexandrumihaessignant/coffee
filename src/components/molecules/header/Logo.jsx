import * as S from './Logo.style';

function Logo() {
  return (
      <S.LogoWrapper to='/'>
        <S.Logo/>
        <S.TitleWrapper>
          <S.Title>Coffee Shop</S.Title>
        </S.TitleWrapper>
      </S.LogoWrapper>
  );
}

export default Logo;
