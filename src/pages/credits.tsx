import React from 'react'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import siteConfig from '../../config'

const credits = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Crédits" desc={ `${siteConfig.siteTitle}` | `${siteConfig.siteHeadline}`} />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Crédits</h1>
        <h2>Photos</h2>
        <p>Benoît Grosjean</p>
        <h2>Site internet</h2>
        <p>
         <a href="https://oliviergenevest.info" target="blank" rel="noreferrer noopener">Olivier Genevest - Projets web</a>
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default credits
