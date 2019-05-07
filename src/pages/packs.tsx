import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { Box, Flex, AnimatedBox, Button, AnimatedButton } from '../elements'
import { ChildImageSharp } from '../types'
import HeaderImage from '../components/header-with-background-image'

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

const Intro = styled(Flex)`
 letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const IntroBox = styled(Box)`
 letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
 
  font-size:26px;
`
const Area = styled(animated.div)`
  width:100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 40vw;
  grid-gap:1vw;
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 60vw;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }


`

const Packs: React.FunctionComponent<PageProps> = ({ data: { packs, bgImage } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#000">
      <SEO title="L'équipes des Chatouilleurs des Cimes vous propose 8 formules différentes sous forme de pack pour répondre à tous vos besoins en terme de grimpe d'arbre en solo ou en groupe." />
         <HeaderImage fluid={bgImage.childImageSharp.fluid} title="Infos Pratiques" height='350px'><h1>Nos formules</h1></HeaderImage>
      <Intro flexDirection={['column', 'column', 'row', 'row']} px={[6, 6, 8, 10]} py={6}>
        
        <IntroBox px={10} py={10}>
          <p>L'équipes des Chatouilleurs des Cimes vous propose 8 formules différentes sous forme de pack pour répondre à tous vos besoins en terme de grimpe d'arbre en solo ou en groupe.</p>

        </IntroBox>
       
      </Intro>
      
      <Flex py={[6, 6, 6, 8]} px={[6, 6, 8, 10]}>
      <Area style={pageAnimation}>
        {packs.edges.map(({ node: pack }) => (
          <GridItem key={pack.slug} to={`/packs${pack.slug}`}>
            <Img fluid={pack.cover.childImageSharp.fluid} />
            <span>{pack.title}</span>
          </GridItem>
        ))}
      </Area>
      </Flex>
       <Flex py={[6, 6, 6, 8]} px={[6, 6, 8, 10]}>
       <Box  px={2} py={2}>
        <p>Possibilité d’adaptation pour personnes à mobilité réduite:  chaque fois nous nous efforçons de partager notre univers en le rendant accessible à tous. </p>
        </Box>
      </Flex>
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
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "5" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

