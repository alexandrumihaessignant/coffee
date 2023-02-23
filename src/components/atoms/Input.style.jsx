import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;

  text-align: center;
  font-size: var(--text-medium-small);
  color: var(--primary);

  padding: 12px 0;
  border: none;
  background-color: var(--light);

  :focus::placeholder {
    color: var(--light);
  }

  ::placeholder {
    text-align: center;
    font-size: var(--text-medium-small);
    color: var(--secondary-dark);
  }
`
