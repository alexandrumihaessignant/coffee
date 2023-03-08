import styled from 'styled-components';

export const Root = styled.div`
  display: grid;
  grid-template-areas: "header"
                       "nav"
                       "search"
                       "body";

  background: linear-gradient(0deg, var(--background-lighter) 0%, var(--background) 95%, var(--background) 100%);
`;

export const Body = styled.div`
  margin-bottom: 84px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
