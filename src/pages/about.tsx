import React from 'react'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title={"About" | `${config.siteTitleAlt}`} desc="Contact page" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm LekoArts!</h1>
        <p>
          You can visit my <a href="https://www.lekoarts.de/en">website</a> or my other{' '}
          <a href="https://gatsby-starter-portfolio.netlify.com">Gatsby projects</a>.
        </p>
       <a title="Vente de billets en ligne" href="https://www.billetweb.fr/shop.php?event=chatouilleurs-des-cimes"  className="shop_frame"  target="_blank"  data-src="https://www.billetweb.fr/shop.php?event=chatouilleurs-des-cimes"  data-max-width="100%"  data-initial-height="600" data-scrolling="no"  data-id="chatouilleurs-des-cimes"  data-resize="1">Vente de billets en ligne</a><script type="text/javascript" src="https://www.billetweb.fr/js/export.js"></script>
      </AnimatedBox>
    </Layout> 
  )
}

export default About
