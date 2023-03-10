import styled from 'styled-components';

export const PagesLinks = styled.ul`
  width: 100%;
  padding-left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 30px;

    padding: 0;
    list-style: none;
    font-size: var(--text-medium);
    font-weight: 450;

    a {
      color: var(--primary-darker);
      text-decoration: none;

      transition: all 0.2s;

      :hover {
        color: var(--accent-lighter);

        :after {
          transform: scaleX(1);
        }
      }

      :after {
        display:block;
        content: '';
        border-bottom: 1px solid var(--accent-lighter);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }
    }
    
    a.selected {
      color: var(--accent);

      :hover {
        color: var(--accent-lighter);
      }
    }
  }
`
