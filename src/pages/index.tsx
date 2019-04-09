import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa';
import { config, useSpring, animated } from 'react-spring'
import Logo from '../components/logo'
import Ribbon from '../components/ribbon'
import Layout from '../components/layout'
import patternWhiteSVG from '../images/pattern-white.svg'

import { AnimatedBox, Box, AnimatedButton, Button, Flex } from '../elements'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
import siteConfig from '../../config'
import { transparentize, readableColor } from 'polished'

type PageProps = {
  data: {
    bgImage: ChildImageSharp
  }
};

const Area = styled(animated.section)`
 min-height:100vh;
 
  flex-grow: 1;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:   'content illustration'
      'content illustration'
      'footer illustration';
  background-color:black;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
    grid-template-areas:
      'illustration'
      'content'
     ;
  }

`



const Content = styled(Flex)`
  grid-area: content;
  color:white;
  position:relative;

`


const CtaButton = styled(Flex)`
  grid-area: illustration;
  z-index:3;
`


const Illustration = styled.div`
  grid-area: illustration;
  background-color:dodgerblue;
 
  position: relative;
 
  


  // gradient noir => transparent sur zone illustration
  &::before{
    content:'';
     background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 24, 49, 0));
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width:100%;
   }



  .bgImage {
     position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    & > img {
      object-fit: cover !important;
      object-position: 50% 50% !important;
    }
    &::before {
      content: '';
      /*background: rgba(0, 0, 0, 0.25);*/
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }


.bgDots {
   background: url(${patternWhiteSVG}) repeat;

    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    width:100%;
   
}

`



const Section = styled(Flex)`
  color:white; 
`

const Hero = styled.h1`
  position:relative;
  color:white;
  margin-bottom: 1em;
  @media (max-width: ${props => props.theme.breakpoints[3]}) {
      font-size: ${props => props.theme.fontSizes[6]};
       margin-bottom: 1.5em;
  } 
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[5]};
       margin-bottom: 1.5em;
  } 
  /*trait vert fluo*/
  &::after {
      content: '';    
      background-color:${props => props.theme.colors.primary};
      position: absolute;
      bottom:-2rem;
      left:0;
      margin-top:1em;
      height: 0.8rem;
      width:30%;
      z-index: 1;
  }
`


const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  background: ${props => props.theme.colors.primary};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  color:black;
`



/*Passer dans data les alias des requetes de données si besoin , cf en bas de page*/
const Index: React.FunctionComponent<PageProps> = ({ data: { bgImage } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
const contentAnimation = useSpring({
    config: config.slow,
    delay: 600, 
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
const ctaAnimation = useSpring({
    config: config.slow,
    delay: 900, 
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
const logoAnimation = useSpring({
    config: config.slow,
    from: { opacity: 1, transform: 'translate3d(0, -80px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  return (
    <Layout color="black" header={false} footer={false}>
      <SEO title={`${siteConfig.siteTitle}`} desc={ `${siteConfig.siteTitle}` | `${siteConfig.siteHeadline}`}/>
       <Area>
      
       <Content   py={[2, 3, 4, 5]}  mb={[10,10,0,0]} flexDirection="column" alignItems="center" justifyContent= "center">
         
          <Section  
            style={{'maxWidth':"550px"}}
            px={[6, 6, 8, 10]}  
            flexDirection="column" 
            alignItems="flex-start" 
            justifyContent="center"

           > 
              <AnimatedBox style={logoAnimation} width="100%" ><Logo fluid/></AnimatedBox>
              <AnimatedBox style={contentAnimation}>
                <Hero >Une aventure géniali’cime !</Hero>
                <p>Vivez une expérience insolite au cœur des arbres sur des sites exceptionnels à travers un panel d’activités sportives, ludiques et sensationnelles accessibles à tous.</p>
              </AnimatedBox>
              <AnimatedBox py={[4, 5, 6, 7]} style={ctaAnimation} >
                <PButton color="red" py={4} px={8}>
                 Infos au <span style={{'whiteSpace':'nowrap'}}>06 49 00 99 20</span>
               </PButton>
              </AnimatedBox>
              <Link to="/reservation">Réservation</Link>
              <AnimatedBox style={contentAnimation}>
                <p>Ouvert toute l'année, dès 7 ans, adapté handisport, découvrez la grimpe d'arbres sur des sites remarquables à Saint-Julien-de-Peyrolas, aux portes des Gorges de l'Ardèche.</p>
<p><FaFacebook size="50px"/><br/>Retrouvez toutes les infos sur notre page <a href={'https://www.facebook.com/'+`${siteConfig.facebookPageID}`} target="blank" title="facebook" >facebook</a></p>
              </AnimatedBox>

          </Section>
       </Content>
      {/* <CtaButton alignItems="flex-end" justifyContent= "center">
          <Box py={[4, 5, 6, 7]} px={[5, 6, 8, 10]} >
            <PButton color="red" py={4} px={8}>
             Réservations au 06 49 00 99 20
           </PButton>
           </Box>
       </CtaButton>*/}
       <Illustration> 
        <Ribbon text="#GrimpeArbre #nouveauté2019"/>
         <Img 
            fluid={bgImage.childImageSharp.fluid}
            className="bgImage"
            backgroundColor="black"
          />

          <div className="bgDots"></div>
      </Illustration>
     
      </Area>
    
    


      {/* 
         <svg style={{position:'absolute',top:0,left:0,right:0,bottom:0,padding:'2rem',zIndex:-1}}width="100%" height="100%" viewBox="0 0 1650 784" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M9.37403 556.426C65.3595 695.625 304.985 762.187 505.609 734.207C811.973 691.481 683.744 620.73 1103.63 734.207C1523.53 847.685 1306.52 553.119 1448.96 403.455C1592.87 252.246 1637.71 160.477 1523 147.964C1408.29 135.45 1407.4 200.689 1183.64 54.4901C959.878 -91.7086 747.745 110.945 622.305 75.6839C496.865 40.4225 181.932 46.8097 245.544 323.158C285.514 496.796 -60.6078 382.427 9.37403 556.426Z" fill="#4e4e4eb8"></path></svg>
       
    */}
     
    </Layout>
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "background" }) {
      childImageSharp {
        fluid(quality: 95, maxHeight: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxHeight: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  
  }
`
