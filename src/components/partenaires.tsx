import React from 'react'
import styled from 'styled-components'
import {  Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { readableColor } from 'polished'
import { Box, Flex, Button } from '../elements'
import theme from '../../config/theme'
import Wave from '../elements/wave'
import siteConfig from '../../config'

const Left = styled(Box)`
	text-align: left;	
`

const Right = styled(Flex)`
	text-align: right;  	
`

const Wrapper = styled(Box)<{ color: string }>`
color:white;
  z-index:1;
  position: relative;
  
  padding-top:5rem;
  align-items: stretch;
  background-color:  ${props =>props.color};
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    padding-top:3rem;
  }
`
const PBox = styled(Flex)` 
  margin: 0 auto;
  .gatsby-image-wrapper {
    height:auto; 
    width:100%;
    max-width:250px;
    margin:1rem;
  }
`


const defaultProps = {
  color: theme.colors.black
}

const Partenaires = ({ color }: LayoutProps) => {
  const data = useStaticQuery(query)

  return (  <Wrapper color={ color }
              px={[5, 6, 8, 10]}  pt={[5, 6, 8, 10]}  pb={[8, 8, 8, 10]}
            
            >
              <h3>Partenaires</h3>
              <PBox   pb={[8, 8, 8, 10]}
                flexDirection="row" 
              alignItems="center" 
              justifyContent= "center">
                  {data.logosPartenaires.edges.map(logo => (
                    
                      <Img
                      alt={logo.node.name}
                      key={logo.node.childImageSharp.fluid.src}
                      fluid={logo.node.childImageSharp.fluid}
                      />
                    
                  ))}
              </PBox>
              

            </Wrapper>

            
          
  )
}

export default Partenaires

Partenaires.defaultProps = defaultProps

export const query = graphql`
  query PartenairesQuery {
    
    logosPartenaires: allFile(filter: { relativePath: { regex: "\/partenaires/" }, extension: {regex: "/(jpg)|(jpeg)|(png)/"} }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 95, maxWidth: 450) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
