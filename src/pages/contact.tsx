import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { AnimatedBox, Flex } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import siteConfig from '../../config'
import HeaderImage from '../components/header-with-background-image'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const data = useStaticQuery(query)


  return (
    <Layout>
      <SEO title={"Contact" | `${config.siteTitleAlt}`} />
        <HeaderImage fluid={data.bgImage.childImageSharp.fluid} title="Infos Pratiques" height='350px'><h1>Contact</h1></HeaderImage>
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
       
        <p>
        <b>Chatouilleurs des cimes (Accroche Aventure)</b><br/>
          281, Chemin de Lafèbre<br/>
          30760 St-Julien de Peyrolas<br/>
          France
        </p>
        <p>{siteConfig.tel}</p>
        <p>{siteConfig.email}</p>
        <div style={{overflow:'hidden',height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }} ><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d355132.0864314165!2d4.270280203273929!3d44.29491723645523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5a809e2c2cfe5%3A0xa857aeae633ec8b5!2sAccroche+Aventure!5e0!3m2!1sfr!2sus!4v1557141255683!5m2!1sfr!2sus"  width="100%" height="100%" frameBorder="0"  allowFullScreen ></iframe>
        </div>
        <h2>Suivez-nous sur les réseaux sociaux :
        </h2>
        <Flex alignItems={'center'} justifyContent={'center'} >
          <a href={'https://www.facebook.com/'+`${siteConfig.facebookPageID}`} target="blank" title="facebook">
            <FaFacebook size={80} />
          </a>
          <a href={'https://www.instagram.com/'+`${siteConfig.facebookPageID}`} target="blank" title="Instagram">
            <FaInstagram size={80} />
          </a>
        </Flex>
 

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