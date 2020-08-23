import React from 'react';

import { Container, Banner, ProfileData, EditButton, Avatar, LocationIcon, CakeIcon, FollowAge } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {

  return (
  <Container>
    <Banner>
      <Avatar />
    </Banner>
    <ProfileData>
      <EditButton outlined>Editar Perfil</EditButton>
      <h1>Geraldo Alves</h1>
      <h2>@geraldoalves</h2>
      <p>Developer at <a href='4yousee.com.br'>@4yousee</a></p>
      <ul>
        <li>
          <LocationIcon />
          Belo Horizonte
        </li>
        <li>
          <CakeIcon />
          Nascido em 15 de fevereiro de 1994
        </li>
      </ul>
      <FollowAge>
        <span>
          seguindo <strong>100</strong>
        </span>
        <span>
          <strong>50</strong> seguidores
        </span>
      </FollowAge>
    </ProfileData>
    <Feed />
  </Container>
  );
}

export default ProfilePage;