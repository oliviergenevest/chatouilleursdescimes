import React from 'react'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'

const PageInfosPratiques = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title={"Infos pratiques" | `${config.siteTitleAlt}`} desc="Informations pratiques" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Infos pratiques</h1>
        <p>
          FAQ - Equipement - Sécurité - Hébergement - Paiements - Localisation        </p>
      
      </AnimatedBox>
    </Layout> 
  )
}

export default PageInfosPratiques
