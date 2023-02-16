import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  * {
    padding: 12px 20px;

    font-size: var(--text-small);
    color: var(--light);
    background-color: var(--accent);
    border: none;
    box-shadow: var(--accent-extra-light) 5px 5px;

    transition: all 0.2s;

    :hover {
      background-color: var(--accent-light);
    }

    :active {
      background-color: var(--accent-lighter);
    }
  }
`
