import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import { Box, Flex, Button } from '../elements'
import { FaMobileAlt } from 'react-icons/fa';
import theme from '../../config/theme'
import siteConfig from '../../config'

const Left = styled(Box)`
	text-align: left;
  	padding-right: 1rem;
  	@media (max-width: ${props => props.theme.breakpoints[1]}) {
   		padding-right: 0;
      display:none;
 	 }
`

const Right = styled(Box)`
	text-align: right;
  	padding-left: 1rem;
  	@media (max-width: ${props => props.theme.breakpoints[1]}) {
   		padding-left: 0;
      width:100%;
 	 }
`

const Phone = styled.span `
position:relative;
svg {
  position:absolute;
  left:-1.2rem;
}`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  background: ${props => props.theme.colors.primary};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  color:black;
`
/*
type SubHeaderProps = { children: React.ReactNode } & typeof defaultProps
*/
const defaultProps = {
  color: 'green',
}

interface QueryResult {
  navigation: {
    edges: {
      node: {
        name: string
        link: string
      }
    }[]
  }
}

const SubHeader = ({ color }: LayoutProps) => {
  //const data: QueryResult = useStaticQuery(query)

  return (

           <Flex flexWrap="nowrap"
                flexDirection={'row'}
               py={2}
               px={4}
                justifyContent="space-between" 
                style={{'backgroundColor':theme.colors.secondary,'fontSize':'14px','color':'white'}}>
              	<Left>
               		Bollène (Vaucluse)
               </Left>
               <Right>
              	 	
              	 		 <a href={'https://www.facebook.com/'+`${siteConfig.facebookPageID}`} target="blank" title="facebook">
              	 			
              	 		</a> <Phone><FaMobileAlt/> {siteConfig.tel}</Phone>
              	 	
               </Right>
            </Flex>
  )
}

export default SubHeader

SubHeader.defaultProps = defaultProps

const query = graphql`
  query LayoutQuery {
    navigation: allNavigationYaml {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`