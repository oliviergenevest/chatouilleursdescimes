import React from 'react'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'

const Contacts = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title={"Contacts" | `${config.siteTitleAlt}`} desc="Contact page" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Contacts</h1>
        <p>
         281, Chemin de Lafèbre<br/>
30760 St-Julien de Peyrolas<br/>
France
        </p>
      
      </AnimatedBox>
    </Layout> 
  )
}

export default Contacts
