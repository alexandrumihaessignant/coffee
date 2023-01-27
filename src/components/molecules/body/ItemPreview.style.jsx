import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Preview = styled.div`
  margin-top: 12px;
  padding-left: 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    padding: 0;
    margin: 0 40px;
    text-align: center;

    font-size: var(--text-larger);
    font-weight: bold;
    color: var(--primary);
  }
`

export const Content = styled.div`
  margin-top: 24px;
  
  display: flex;

  img {
    width: 50%;
    height: 500px;

    object-fit: cover;
    object-position: center;

    opacity: .88;
  }
  
  div {
    width: 50%;
    margin-left: 24px;
    
    p {
      color: var(--primary-darker);
    }
    
    p:first-child {
      font-size: var(--text-medium);
      font-weight: bold;
    }
    
    p:nth-child(2) {
      margin-top: 12px;

      font-size: var(--text-small);
    }
  }
`

export const Buttons = styled.div`
  width: 100%;
  margin-top: 24px;
  height: fit-content;

  display: flex;
  justify-content: space-between;
`