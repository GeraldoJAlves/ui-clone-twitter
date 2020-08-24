import React from 'react';

import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Maria Alves" nickname="@maria" />,
              <FollowSuggestion name="Jose Gomes" nickname="@jose" />,
              <FollowSuggestion name="Joao Fino" nickname="@joao" />,
            ]}
          />
          <List
            title="Top Trends"
            elements={[
              <News
                title="Assuntos do momento no mundo"
                description="Covid-19"
              />,
              <News
                title="Assuntos do momento no brasil"
                description="ui clone twitter"
              />,
              <News
                title="Assuntos do momento em minas"
                description="pao de queijo mais barato"
              />,
              <News
                title="Assuntos do momento em abaete"
                description="rua cheia de buracos"
              />,
            ]}
          />
          <List
            title="Top Trends"
            elements={[
              <News
                title="Assuntos do momento no mundo"
                description="Covid-19"
              />,
              <News
                title="Assuntos do momento no brasil"
                description="ui clone twitter"
              />,
              <News
                title="Assuntos do momento em minas"
                description="pao de queijo mais barato"
              />,
              <News
                title="Assuntos do momento em abaete"
                description="rua cheia de buracos"
              />,
            ]}
          />
          <List
            title="Top Trends"
            elements={[
              <News
                title="Assuntos do momento no mundo"
                description="Covid-19"
              />,
              <News
                title="Assuntos do momento no brasil"
                description="ui clone twitter"
              />,
              <News
                title="Assuntos do momento em minas"
                description="pao de queijo mais barato"
              />,
              <News
                title="Assuntos do momento em abaete"
                description="rua cheia de buracos"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
