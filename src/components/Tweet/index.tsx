import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Status,
  Icons,
  Dot,
  RocketseatIcon,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>4yousee</strong>
            <span>@4yousee</span>
            <Dot />
            <time>20 de set</time>
          </Header>
          <Description>Nao feche os olhos</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>
            <Status>
              <RetweetIcon />
              30
            </Status>
            <Status>
              <LikeIcon />
              60
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
