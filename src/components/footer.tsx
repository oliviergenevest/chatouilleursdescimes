import React from 'react'
import styled from 'styled-components'
import {  Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { readableColor } from 'polished'
import { Box, Flex, Button } from '../elements'
import theme from '../../config/theme'
import Wave from '../elements/wave.tsx'
import siteConfig from '../../config'

const Left = styled(Box)`
	text-align: left;
  	
`

const Right = styled(Box)`
	text-align: right;
  	
`

const Wrapper = styled(Flex)<{ color: string }>`
  z-index:1;
  position: relative;
  width:100%;
  padding-top:5rem;
  align-items: stretch;
  background-color:  ${props =>props.color};
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    padding-top:3rem;
  }
`

const WrapNavigation = styled(Flex)`

flex-wrap:wrap;

`


const Navigation = styled(Flex)`

 color: ${props => props.theme.colors.black};
 box-sizing: border-box;
/* text-transform:uppercase;*/
`

const defaultProps = {
  color: theme.colors.primary
}

const Footer = ({ color }: LayoutProps) => {
  const data = useStaticQuery(query)

  return (
            <> 

           <Wrapper color={ color }
           		as="footer" 
            
              flexDirection="column" 
              alignItems="flex-start" 
              justifyContent= "flex-end"
            >
            <Wave orientation="top"/>
          <WrapNavigation  px={[5, 6, 8, 10]}  py={[5, 6, 8, 10]} justifyContent="space-between" >
            <Navigation fontSize={1}  my={4} flexDirection="column"  alignItems="flex-start" 
           >
              <Link to="/packs">Nos formules</Link>
              <Link to="/reservation">Réservation</Link>
              <Link to="/infos-pratiques">Infos pratiques</Link>
              <Link to="/contact">Contact</Link>
             
            </Navigation>
           
            <Navigation fontSize={1}  my={4}  flexDirection="column"  alignItems="flex-start" 
          >
              <Link to="/reservation">Réservation</Link>
              <a href={data.reglementInterieur.publicURL} target="blank" download>Réglement intérieur</a>
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/rgpd">Politique de confidentialité</Link>
            </Navigation>
             <div>
              <div>
                <p>
                 281, Chemin de Lafèbre<br/>
                30760 St-Julien de Peyrolas<br/>
                France<br/>
                Tel : {siteConfig.tel}
                </p>
              </div>
                 <Img fixed={data.logoWhite.childImageSharp.fixed}/>
            </div>
            
           </WrapNavigation><Wave orientation="bottom"/>
            <Box px={[5, 6, 8, 10]} fontSize={1}  my={3} >(c) Tous droits réservés - Chatouilleurs des Cimes - 2019 - <a href="https://oliviergenevest.info" target="blank">crédits</a>
            </Box>
            </Wrapper>

            </>
          
  )
}

export default Footer

Footer.defaultProps = defaultProps

export const query = graphql`
  query FooterQuery {
    
    logoWhite: file(sourceInstanceName: { eq: "images" }, name: { eq: "logo_white" }) {
      childImageSharp {
        fixed(quality: 95, width: 250) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    reglementInterieur: file(sourceInstanceName: { eq: "pdf" }, name: { eq: "reglement-interieur-chatouilleurs-des-cimes" }) {
         publicURL
    } 
  }
`
