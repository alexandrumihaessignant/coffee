import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  img {
    width: 225px;
    height: 225px;

    object-fit: cover;
    object-position: center;

    opacity: .88;
  }

  button {
    margin-top: 18px;
  }
`
