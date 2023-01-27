import styled from 'styled-components';

export const App = styled.div`
  display: grid;
  grid-template-areas: "header"
                       "nav"
                       "search"
                       "body";

  background: linear-gradient(0deg, var(--background-lighter) 0%, var(--background) 95%, var(--background) 100%);
`;
