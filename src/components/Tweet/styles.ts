import styled,{css} from 'styled-components';

import { Chat, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`

`;

export const Avatar = styled.div`

`;

export const Content = styled.div`

`;

export const Header = styled.div`

`;

export const Description = styled.div`

`;

export const ImageContent = styled.div`

`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Status = styled.div`
  display: flex;
`;

export const Dot = styled.div`

`;


const cssIcon = css`
  width: 20px;
  height: 20px;
`;

export const RocketseatIcon = styled(Favorite)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;
  fill: var(--gray);
`;
export const CommentIcon = styled(Chat)`
  ${cssIcon}
`;
export const RetweetIcon = styled(Favorite)`
  ${cssIcon}
`;
export const LikeIcon = styled(Favorite)`
  ${cssIcon}
`;