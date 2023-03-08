import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  min-width: 225px;

  display: flex;
  justify-content: center;
`

export const Grid = styled.ul`
  padding-left: 0;
  margin: 0;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: center;
  grid-gap: 1rem;
`
