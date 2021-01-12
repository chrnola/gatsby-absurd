import React from 'react';
import styled from 'styled-components';

import { Container, Section } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Photos = () => (
    <Section id="pics">
      <Container>
        <h1>Pics</h1>
        <p>
            Follow us on Instagram:&nbsp;
            <ExternalLink href="https://www.instagram.com/pompetsitting/">
                @pompetsitting
            </ExternalLink>
        </p>
      </Container>
    </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;

  }
`;

export default Photos;
