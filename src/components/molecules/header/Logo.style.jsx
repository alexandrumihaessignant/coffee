import {Link} from 'react-router-dom';
import styled from 'styled-components';


import logoAsset from './../../../assets/logo.png'

export const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: inline-block;
  align-self: center;

  height: 90px;
  width: auto;

  background-image: url(${logoAsset});
  background-size: contain;
  background-repeat: no-repeat;

  text-decoration: none;
  :after {
      margin-left: 90px;
      content: '';
  }
`

export const TitleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const Title = styled.p`
  align-self: center;
  margin: -8px 0 0 0;

  display: inline-block;
  width: auto;

  font-size: var(--text-larger);
  color: var(--primary-darker);
  text-decoration: none;

  transition: all 0.2s;

  :hover {
    color: var(--accent);
    text-decoration: underline;
  }
`
