import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { AnimatedBox,AnimatedFlex, Flex } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import siteConfig from '../../config'
import HeaderImage from '../components/header-with-background-image'
import { FaFacebook, FaInstagram, FaMobileAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const data = useStaticQuery(query)


const PBox = styled(AnimatedBox)`
background-color:${({ bc }) => bc}; 
text-align:center;
border-radius:0.5em;
margin-bottom:1em;
 `
  return (
    <Layout>
      <SEO title={"Contact" | `${config.siteTitleAlt}`} />
        <HeaderImage fluid={data.bgImage.childImageSharp.fluid} title="Infos Pratiques" ><h1>Contact</h1></HeaderImage>
      <Flex 
        style={pageAnimation} 
       /* mx={[0,2,4,5]}*/
        py={[6, 6, 6, 8]} 
        px={[6, 6, 8, 6, 8, 13]}
        flexDirection={[ 'column','column','column','row']}
        justifyContent={['center','space-around']}
      >
       
        <PBox p={[6, 8, 10]} bc='#a4ce3b40'>
        
          <p><b>Chatouilleurs des cimes (Bollène Aventure)</b></p>
         
         <address>
            <p><a href={"tel:"+`${siteConfig.tel}`}>{siteConfig.tel}</a></p>
           <p><a href={"mailto:"+`${siteConfig.email}`}>{siteConfig.email}</a></p>
         </address>
        </PBox>
        <PBox p={[6, 8, 10]} bc='#b1b1b138'>
         
          <p>Suivez-nous sur les réseaux sociaux :
        </p>
        <Flex alignItems={'center'} justifyContent={'center'} >
          <a href={'https://www.facebook.com/'+`${siteConfig.facebookPageID}`} target="blank" rel="noreferrer noopener" title="Accéder à la page Facebook des Chatouilleurs des Cimes">
            <FaFacebook size={80} />
          </a>
         {/* <a href={'https://www.instagram.com/'+`${siteConfig.facebookPageID}`} target="blank" title="Instagram">
            <FaInstagram size={80} />
          </a>*/}
        </Flex>
        </PBox>
        </Flex>
        <AnimatedBox py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <div style={{overflow:'hidden',height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }} ><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d355132.0864314165!2d4.270280203273929!3d44.29491723645523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5a809e2c2cfe5%3A0xa857aeae633ec8b5!2sAccroche+Aventure!5e0!3m2!1sfr!2sus!4v1557141255683!5m2!1sfr!2sus"  width="100%" height="100%" frameBorder="0"  allowFullScreen ></iframe>
        </div>
       
 

      </AnimatedBox>
    </Layout> 
  )
}

export default Contact
export const query = graphql`
  query ContactQuery {
    
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "21" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`