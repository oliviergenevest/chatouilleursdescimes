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
        <h2>Tarifs</h2>
        <p>Tableau des tarifs</p>
        <h2>Horaires</h2>
        <p>Nous sommes ouverts toute l'année. Contactez-nous pour l'organisation d'un évenement spécial.</p>
        <h2>Sécurité</h2>
          <p>Chaque client est équipé par nos soins d'un équipement de sécurité fourni par les Chatouilleurs des Cimes et vérifié avant chaque départ.</p>
         <p>Veuillez noter que l'accès est réservé aux personnes ayant souscrit, au préalable, une assurance en responsabilité civile.</p>  
        <h2>Equipement</h2>
        <p>
– Une tenue adaptée à l'exercice des activités d'extérieur est fortement
recommandée. (tenue de sport, chaussure fermée, cheveux attachés, pas de
bijoux...).<br/>
– Ne gardez sur vous aucun objet susceptible de tomber.</p>
<h2>Hébergement</h2>
<p>Des hébergements sont disponibles aux environs. Vous trouverez la liste complète sur le site de la Mairie : <a href="http://saintjuliendepeyrolas.fr/hebergement-2/" target="blank">http://saintjuliendepeyrolas.fr/hebergement-2</a>. Nous vous recommandons les hébergements suivants : Domaine du Pont d'Ardèche, Domaine Saint Pancrace.</p>
<h2>Localisation</h2>
<p>Les Chatouilleurs des Cimes sont situés à Saint Julien de Peyrolas.</p>
      
      </AnimatedBox>
    </Layout> 
  )
}

export default PageInfosPratiques
