import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/SEO'
import BookingForm from '../components/booking-form'
import HeaderImage from '../components/header-with-background-image'
import { AnimatedBox, Box, AnimatedButton, Button, Flex } from '../elements'
import {  readableColor } from 'polished'
const PButtonOpenBookingForm = styled(AnimatedButton)<{ color: string }>`
 background: ${props => (props.color === 'white' ? 'black' : props.color)};
  background: ${props => props.theme.colors.primary};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  color:black;
  cursor:pointer;
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



const Réservation = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
 const handleClick = (e) => GUIDAP.booking.call('bolleneaventure.guidap.co', 'pu8dkHrUlK1mGcSPazjA3fJbFVXDY4yT6ZsC?lang=fr', e)

 const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO title={"Billetterie" | `${config.siteTitleAlt}`} desc="Acheter vos billets en ligne, paiement par CB entièrement sécurisé" />
      <HeaderImage fluid={data.bgImage.childImageSharp.fluid} title="Infos Pratiques"><h1>Réservation</h1></HeaderImage>
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
       
       <p>Bienvenue dans notre billetterie en ligne avec paiement sécurisé par carte bancaire.
Commandez vos billets en quelques clics et recevez vos tickets électroniques nominatifs, directement par e-mail.</p>

  {/*  <iframe title="Réservation billet web" src="https://www.billetweb.fr/shop.php?event=chatouilleurs-des-cimes" width="100%" height="650px" frameBorder="0"></iframe> */} 
    
  <PButtonOpenBookingForm color="red" py={4} px={8}   
                      onClick={ handleClick } >
               Réservation en ligne
                </PButtonOpenBookingForm>
      </AnimatedBox>
    </Layout> 
  )
}

export default Réservation
export const query = graphql`
  query ReservationQuery {
    
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "25" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`