import styled from 'styled-components';

export const Search = styled.div`
  grid-area: search;
  height: 70px;
  width: 100%;
  padding: 12px 0;
  display: flex;
  
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    
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

  }
`
