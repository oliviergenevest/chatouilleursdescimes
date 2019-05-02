import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import siteConfig from '../../config'
import { Box, AnimatedBox, Button, AnimatedButton } from '../elements'
import SEO from '../components/SEO'
import { FaHiking, FaUniversalAccess, FaPagelines } from 'react-icons/fa';
import theme from '../../config/theme'

const Area = styled.div`
 display:grid;
 grid-template-columns:2fr 1fr;
 @media (max-width: ${props => props.theme.breakpoints[2]}) {
     grid-template-columns:1fr;
    }
`

const PackDescription = styled.div`
 grid-column:1;
`

const Side = styled(animated.div)`
  background-color:#a4ce3b40;
  margin: 0 auto;
  grid-column: 2;
  grid-row: 1;
   @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-column: 1;
    grid-row: 2;
    }
`

const PBoxSide = styled(AnimatedBox)`
    position: sticky;
    top: 0;
    max-width: 1400px;
    margin: 0 auto;
    text-align:center;
`
const PBox = styled(AnimatedBox)`
 
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  transition: ease 0.3s;
   &:hover {
    box-shadow: 0 5px 5px #c6ceb157 ;
    transform: translateY(-5px);
  }
  &:focus {
    outline: none;
    box-shadow:  0 3px 3px #c6ceb157;
  }
`


const List = styled.ul`
 
`
const ListItem = styled.li`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:flex-start; 
 text-align:left;
 padding-top:1rem;
 flex-wrap: nowrap;
 svg { 
  padding:1rem;
  min-width:50px;
}
span{margin-left:1em;}
`

type PageProps = {
  data: {
    pack: {
      title_detail: string
      color: string
      category: string
      desc: string
      slug: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      edges: {
        node: {
          name: string
          childImageSharp: {
            fluid: {
              aspectRatio: number
              src: string
              srcSet: string
              sizes: string
              base64: string
              tracedSVG: string
              srcWebp: string
              srcSetWebp: string
            }
          }
        }
      }[]
    }
  }
};

const Pack: React.FunctionComponent<PageProps> = ({ data: { pack, images } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  /*const buttonAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })*/

  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })
   const sideBarAnimation = useSpring({ config: config.slow, delay: 900, from: { opacity: 0,transform:'translate3d(30px, 0, 0)' }, to: { opacity: 1, transform: 'translate3d(0, 0, 0)'  } })

  return (
    <Layout color={pack.color}>
      <SEO
        pathname={pack.slug}
        title={`Nos formules | ${pack.title_detail}`}
        desc={pack.desc}
        node={pack.parent}
        banner={pack.cover.childImageSharp.resize.src}
        individual={true}
      />

      <Area>
        <PackDescription>

        <PBox py={10} px={[6, 6, 8, 10]}>
          <Category style={categoryAnimation}>{pack.category}</Category>
          <animated.h1 style={titleAnimation}>{pack.title_detail}</animated.h1>
          <Description style={descAnimation}>
            <div dangerouslySetInnerHTML={{ __html: pack.desc }} />
          </Description>
        </PBox>
        <Content bg={pack.color} py={10}>
          <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
            {images.edges.map(image => (
              <Img
                alt={image.node.name}
                key={image.node.childImageSharp.fluid.src}
                fluid={image.node.childImageSharp.fluid}
              />
            ))}
          </PBox>
        </Content>
        
        </PackDescription>

        <Side style={sideBarAnimation}>
          <PBoxSide  py={10} px={[6, 6, 8, 10]}   >
         
           <PButton color={theme.colors.secondary} py={4} px={8}>
           Billeterie
          </PButton>

          <PButton color={theme.colors.secondary} py={4} px={8}>
           Ce pack est sur devis. Contactez-nous pour plus d'information.
          </PButton>
           <List>

            <ListItem><FaPagelines size={50} /><span>Toutes les installations sont éphémères.</span></ListItem>
            <ListItem><FaHiking size={50} /> <span>Il y a toujours une petite marche d’approche. </span></ListItem>
            <ListItem><FaUniversalAccess size={50} /><span>Possibilité d’adaptation pour personnes à mobilité réduite.</span> </ListItem>
           </List>
           
         
          
        </PBoxSide>
        </Side>
      </Area>

    </Layout>
  )
}

export default Pack

export const query = graphql`
  query PackTemplate($slug: String!, $images: String!) {
    pack: packsYaml(slug: { eq: $slug }) {
      title_detail
      color
      category
      desc
      slug
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images }, extension: {regex: "/(jpg)|(jpeg)|(png)/"} }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
