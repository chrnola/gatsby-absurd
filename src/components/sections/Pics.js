import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container, Section } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Photos = () => (
  <StaticQuery
    query={graphql`
      query {
        insta_pics: allInstaNode(limit: 9, sort: {fields: likes, order: DESC}) {
          nodes {
            id,
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
        <Section id="pics">
          <Container>
            <h1>Pics</h1>
            <p>
                Follow us on Instagram:&nbsp;
                <ExternalLink href="https://www.instagram.com/pompetsitting/">
                    @pompetsitting
                </ExternalLink>
            </p>
            <Grid>
                {data.insta_pics.nodes.map((node) => {
                    return (
                        <a key={node.id} href={"https://instagram.com/p/" + node.id}>
                            <Img fluid={node.localFile.childImageSharp.fluid} />
                        </a>
                    );
                })}
            </Grid>
          </Container>
        </Section>
    )}
  />
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
