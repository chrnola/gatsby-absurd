import React from 'react';
import styled from 'styled-components';

import { Container, Section } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Contact = () => (
    <Section id="contact">
        <Container>
            <h1>Contact</h1>
            <Grid>
                <Container>
                    <h2>Phone</h2>
                    <ExternalLink href="tel:14846399296">
                        <p>(484) 639-9296</p>
                    </ExternalLink>
                </Container>
                <Container>
                    <h2>Email</h2>
                    <ExternalLink href="mailto:booking.peaceofmind@gmail.com">
                        <p>booking.peaceofmind@gmail.com</p>
                    </ExternalLink>
                </Container>

            </Grid>

        </Container>
    </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`;

export default Contact;
