import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import siteConfig from '../../config'
import HeaderImage from '../components/header-with-background-image'

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
          281, Chemin de Lafèbre<br/>
          30760 St-Julien de Peyrolas<br/>
          France
        </p>
        <p>{siteConfig.tel}</p>
        <p>{siteConfig.email}</p>
        <h2>Suivez-nous sur les réseaux sociaux :
        </h2>

        <p>Facebook - Instagram</p>
      
      </AnimatedBox>
    </Layout> 
  )
}

export default Contact
export const query = graphql`
  query ContactQuery {
    
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "23" }) {
      childImageSharp {
        fluid(quality: 95, maxHeight: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`