import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    packs: {
      edges: {
        node: {
          title: string
          slug: string
          cover: ChildImageSharp
        }
      }[]
    }
  }
};

const Area = styled(animated.div)`
  width:100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 25vw;
grid-gap:1vw;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Packs: React.FunctionComponent<PageProps> = ({ data: { packs } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#000">
      <SEO title="L'équipes des Chatouilleurs des Cimes vous propose 8 formules différentes sous forme de pack pour répondre à tous vos besoins en terme de grimpe d'arbre en solo ou en groupe." />
      <p>toutes les installations sont éphémères. Il y a toujours une petite marche d’approche. Possibilité d’adaptation pour personnes à mobilité réduite:  chaque fois nous nous efforçons de partager notre univers en le rendant accessible à tous. </p>
      <Area style={pageAnimation}>
        {packs.edges.map(({ node: pack }) => (
          <GridItem key={pack.slug} to={`/packs${pack.slug}`}>
            <Img fluid={pack.cover.childImageSharp.fluid} />
            <span>{pack.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Packs

export const query = graphql`
  query PacksQuery {
    packs: allPacksYaml {
      edges {
        node {
          title
          slug
          cover {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
