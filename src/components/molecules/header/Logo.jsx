import * as S from './Logo.style';

const Logo = () => {
  return (
    <S.LogoWrapper>
      <S.Logo/>
      <S.TitleWrapper>
        <S.Title href='#'>Coffee Shop</S.Title>
      </S.TitleWrapper>
    </S.LogoWrapper>
  );
}

export default Logo;
