import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import BookingForm from '../components/booking-form'

const Réservation = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  

  return (
    <Layout>
      <SEO title={"Billetterie" | `${config.siteTitleAlt}`} desc="Acheter vos billets en ligne, paiement par CB entièrement sécurisé" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Réservation</h1>
       <p>Bienvenue dans notre billetterie en ligne avec paiement sécurisé par carte bancaire.
Commandez vos billets en quelques clics et recevez vos tickets électroniques nominatifs, directement par e-mail.</p>

     <iframe src="https://www.billetweb.fr/shop.php?event=chatouilleurs-des-cimes" width="100%" height="650px" frameBorder="0"></iframe>
       
      </AnimatedBox>
    </Layout> 
  )
}

export default Réservation
