import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { AnimatedBox, Flex } from '../elements'
import SEO from '../components/SEO'
import HeaderImage from '../components/header-with-background-image'
import { config, useSpring } from 'react-spring'


const Table = styled.table `
    border-collapse: collapse;
    border-spacing: 0;
    margin: 0 0 1.5em;

 td, th {
  text-align:left;
  border:1px solid lightgrey;
  padding:1rem;
   @media (max-width: ${props => props.theme.breakpoints[1]}) {
     padding:.3rem;
   }
 }
`

const PBox = styled(AnimatedBox)`
background-color:${({ bc }) => bc}; 
text-align:center;
border-radius:0.5em;
flex-basis: auto;

margin-bottom:1em;
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    width:48%;
    }
 `

const PageInfosPratiques = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO title={"Infos pratiques" | `${config.siteTitleAlt}`} desc="Informations pratiques" />
      <HeaderImage fluid={data.bgImage.childImageSharp.fluid} title="Infos Pratiques" >
        <h1>Infos pratiques</h1>
      </HeaderImage>
    { /* <AnimatedBox  py={[6, 6, 6, 8]} 
        px={[6, 6, 8, 6, 8, 13]}         style={pageAnimation} >
          <h2>Tarifs</h2>
          <Table>
          <tbody>
            <tr><th></th><th>Adultes (+14 ans)</th><th>Enfants (7/13 ans)</th></tr> 
            <tr><th>Pack Sensibl'arbre</th><td>20€</td><td>15 €</td></tr>
            <tr><th>Pack Sensation</th><td>25€</td><td>20€</td></tr>
            <tr><th>Pack Degust'arbre</th><td>30€</td><td>-</td></tr>
            <tr><th>Pack Decon’arbre</th><td colSpan="2">Sur devis</td></tr> 
            <tr><th>Pack Arbr’autonomie</th><td colSpan="2">Sur devis</td></tr> 
            <tr><th>Pack Arbr’école</th><td colSpan="2">Sur devis</td></tr>
            <tr><th>Pack Nuitée dans les cimes</th><td colSpan="2">Sur devis</td></tr> 
            <tr><th>Pack L’arbre pour tous</th><td colSpan="2">Sur devis</td></tr> 
          </tbody>
          </Table>
     </AnimatedBox>*/}
      <Flex 
        py={[6, 6, 6, 8]} 
        px={[6, 6, 8, 6, 8, 13]}   
        flexDirection={[ 'column','column','column','row']}
        justifyContent={['center','space-between']}
        flexWrap={['nowrap','wrap']}
        
      >

        <PBox p={[6, 8, 10]} bc='#a4ce3b40'>
          <h2>Horaires</h2>
          <p>Nous sommes ouverts toute l'année. Contactez-nous pour l'organisation d'un évenement spécial.</p>
        </PBox>

        <PBox p={[6, 8, 10]} bc='#b1b1b138'>
          <h2>Sécurité</h2>
          <p>Chaque client est équipé par nos soins d'un équipement de sécurité fourni par les Chatouilleurs des Cimes et vérifié avant chaque départ.</p>
          <p>Veuillez noter que l'accès est réservé aux personnes ayant souscrit, au préalable, une assurance en responsabilité civile.</p>  
        </PBox>

        <PBox p={[6, 8, 10]} bc='#49499221'>
        <h2>Equipement</h2>
        <p>
        – Une tenue adaptée à l'exercice des activités d'extérieur est fortement
        recommandée. (tenue de sport, chaussure fermée, cheveux attachés, pas de
        bijoux...).<br/>
        – Ne gardez sur vous aucun objet susceptible de tomber.
        </p>        
        </PBox>

        <PBox p={[6, 8, 10]} bc='#a4ce3b40'>
        <h2>Hébergement</h2>
        <p>Des hébergements sont disponibles aux environs. Vous trouverez la liste complète sur le site de la Mairie : <a href="http://saintjuliendepeyrolas.fr/hebergement-2/" target="blank">http://saintjuliendepeyrolas.fr/hebergement-2</a>. Nous vous recommandons les hébergements suivants : Domaine du Pont d'Ardèche, Domaine Saint Pancrace.</p>
        </PBox>
        <PBox p={[6, 8, 10]} bc='#b1b1b138'>
        <h2>Localisation</h2>
        <p>Les Chatouilleurs des Cimes sont situés à Saint Julien de Peyrolas, aux portes des Gorges de l'Ardèche. <Link to='/contact'>Plan d'accès</Link></p>
        </PBox>
        <PBox p={[6, 8, 10]} bc='#b1b1b138'>
        <h2>Tarifs</h2>
          <Table>
          <tbody>
            <tr><th></th><th>Adultes (+14 ans)</th><th>Enfants (7/13 ans)</th></tr> 
            <tr><th>Pack Sensibl'arbre</th><td>20€</td><td>15 €</td></tr>
            <tr><th>Pack Sensation</th><td>25€</td><td>20€</td></tr>
            <tr><th>Pack Degust'arbre</th><td>30€</td><td>-</td></tr>
            <tr><th>Pack Decon’arbre</th><td colSpan="2">Sur devis</td></tr> 
            <tr><th>Pack Arbr’autonomie</th><td colSpan="2">Sur devis</td></tr> 
            <tr><th>Pack Arbr’école</th><td colSpan="2">Sur devis</td></tr>
            <tr><th>Pack Nuitée dans les cimes</th><td colSpan="2">Sur devis</td></tr> 
            <tr><th>Pack L’arbre pour tous</th><td colSpan="2">Sur devis</td></tr> 
          </tbody>
          </Table>
          </PBox>
      </Flex>
     
    </Layout> 
  )
}

export default PageInfosPratiques

export const query = graphql`
  query infosPratiquesQuery {
    
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "5" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`