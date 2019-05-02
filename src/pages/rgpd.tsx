import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import siteConfig from '../../config'
import styled from 'styled-components'

const Table = styled.table `
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0 0 1.5em;

 td {
  border:1px solid lightgrey;
  padding:1rem;
   @media (max-width: ${props => props.theme.breakpoints[1]}) {
     padding:.3rem;
   }
 }


 `

const pageRGPD = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="RGPD" desc={ `${siteConfig.siteTitle}` | `${siteConfig.siteHeadline}`} />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1> <svg
  width="100"
  height="100"
  viewBox="0 0 600 600"
  xmlns="http://www.w3.org/2000/svg"


>
  <g transform="translate(300,300)">
    <path d="M90.4,-146.5C120.3,-121.5,149.7,-101.7,169.7,-73.1C189.7,-44.5,200.3,-7.1,195.6,28.4C190.9,63.9,171,97.4,145,123.2C118.9,149,86.6,167.1,53.8,171.2C21,175.3,-12.3,165.4,-55.6,164.2C-98.9,163,-152.3,170.6,-188.2,150.9C-224.1,131.3,-242.7,84.4,-249.7,35.9C-256.7,-12.6,-252.1,-62.8,-229.1,-101.2C-206.2,-139.5,-165,-166.1,-123.8,-185.9C-82.5,-205.8,-41.3,-218.9,-5.5,-210.3C30.3,-201.8,60.6,-171.6,90.4,-146.5Z" fill="#a4ce3b" />
  </g>
</svg>
RGPD - Protection des données</h1>
       
        <h2>Données personnelles collectées</h2>
        <p>Chatouilleurs des Cimes collecte des données relatives aux acheteurs de billets (nom, prénom, email, télephone). 
        Ces données ne sont ni vendues, ni partagées.
         Leur utilisation est exclusivement réservée à Chatouilleurs des Cimes afin de pouvoir gérer les entrées. 
</p>


<h2>Quels sont les cookies installés par le site</h2>
<p> Ce site utilise des cookies afin d’améliorer votre expérience et optimiser notre site internet.</p>
<p>
Un cookie est un petit fichier de texte transféré à partir d’un serveur web vers votre navigateur web ou votre disque dur lorsque vous visitez un site web. Si votre navigateur web est configuré pour accepter les cookies, ils seront stockés dans le navigateur web ou le disque dur jusqu’à ce que la date d’expiration soit dépassée ou jusqu’à ce que vous supprimez les cookies vous-même.</p>
<p>
Vous trouverez ci-dessous les explications de notre utilisation des cookies sur nos sites Web et la raison pour laquelle nous les utilisons.
</p>

<Table>
<tbody>
<tr>
<td><strong>Cookies</strong></td>
<td><strong>Utilité</strong></td>
</tr>


<tr>
<td>consent-is</td>
<td>Cookie obligatoire de l’outil cookie hub afin de conserver le dernier choix en matière de cookies</td>
</tr>
<tr>
<td>_ga _gid _gtag_UA_XXXXXX</td>
<td>Cookies facultatifs de Google permettant de collecter les statistiques de visites de manière anonyme</td>
</tr>
<tr>
<td>billet web</td>
<td>Cookie tiers obligatoire lié à la réservation en ligne. Ce cookie provient de notre prestataire de billeterie : billetweb.
 Nous vous invitons à consulter leur politique de protection des données disponible à cette adresse : <a href="https://www.billetweb.fr/fr/legal" target="blank">https://www.billetweb.fr/fr/legal</a></td>
</tr>
</tbody>
</Table>


<h2>Comment nous contacter</h2>
<p>
Pour plus d'informations sur la gestion des données personnelles ou si vous avez des questions, n'hésitez pas à nous contacter:
</p>
<p>
Chatouilleurs des Cimes<br/>
281 chemin de Lafèbre<br/>Route de Barjac<br/>30760 - Saint Julien de Peyrolas<br/>
 06 49 00 99 20<br/>
</p>
      </AnimatedBox>
    </Layout>
  )
}

export default pageRGPD