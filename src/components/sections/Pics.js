import React from 'react';

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

export default Photos;
