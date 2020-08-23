import React from 'react';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExitIcon,
  BotSide,
  Avatar,
  ProfileData
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Incial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className='active'>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Geraldo Alves</strong>
          <span>@geraldoalves</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
