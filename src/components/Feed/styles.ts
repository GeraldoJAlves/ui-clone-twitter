import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  text-align: center;
  padding: 11px 0 15px;
  font-weight: bold;
  font-size: 15px;
  outline: 0;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  cursor: pointer;
  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display:flex;
  flex-direction: column;
  flex-shrink: 0;
`;
