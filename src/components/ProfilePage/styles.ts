import styled, { css } from 'styled-components';

import {Cake, LocationOn} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  ::webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);
`;

export const Avatar = styled.div`
  
`;

export const FollowAge = styled.div`
  
`;

export const ProfileData = styled.div`
  
`;

const cssIcon = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
`;

export const CakeIcon = styled(Cake)`
  ${cssIcon}
`;

export const LocationIcon = styled(LocationOn)`
  ${cssIcon}
`;