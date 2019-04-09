import React from 'react'
import styled from 'styled-components'
import {  Link } from 'gatsby'
import { readableColor } from 'polished'
import { Box, Flex, Button } from '../elements'
import theme from '../../config/theme'
import Wave from '../elements/Wave'

const Left = styled(Box)`
	text-align: left;
  	
`

const Right = styled(Box)`
	text-align: right;
  	
`

const Wrapper = styled(Flex)<{ color: string }>`
  z-index:1;
  position: relative;
 
  padding-top: 13rem;
  background-color:  ${props =>props.color};
  
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    padding-top: 7rem;
  }



`

const defaultProps = {
  color: 'green'
}

const Footer = ({ color }: LayoutProps) => {
  //const data: QueryResult = useStaticQuery(query)

  return (

           <Flex color="blue"
           		as="footer" 
                flexDirection="column" 
                alignItems="flex-start" 
                justifyContent= "flex-end"
              >
              	<Wave orientation="top" />
            <Box fontSize={0} px={[5, 6, 8, 10]}  my={2} ><a href="https://oliviergenevest.info" target="blank">crédits</a>
          
                <Link to="/mentions-legales">Mentions légales</Link> - 2019
            </Box>
            </Flex>
  )
}

export default Footer

Footer.defaultProps = defaultProps
