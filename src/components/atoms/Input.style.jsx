import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;

  text-align: center;
  font-size: var(--text-medium-small);
  color: var(--primary);

  padding: 12px 0;
  border: none;
  background-color: transparent;

  ::placeholder {
    text-align: center;
    font-size: var(--text-medium-small);
    color: var(--secondary-dark);
  }
  
  :focus::placeholder {
    color: var(--light);
  }

  :focus-visible {
    outline: none;
    border-bottom: 1px solid var(--accent-light);
  }
`
