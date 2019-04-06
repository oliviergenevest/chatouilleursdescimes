import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import 'typeface-boogaloo'
import 'typeface-acme'
import { Box, Flex } from '../elements'
import Wave from '../elements/Wave.tsx'
import theme from '../../config/theme'
import reset from '../styles/reset'

import Logo from './logo'
import Headroom from 'react-headroom'
import headroomCss from './headroom'

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-family:'boogaloo',sans-serif;
      font-weight:bold;
      font-size: ${theme.fontSizes[7]};
      text-transform:uppercase;
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Work Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    /*background: white;*/
    font-size: 18px;
  }

  a {
    transition: all 0.3s ease-in-out;
    color: ${theme.colors.secondary};
    text-decoration:none;
    &:hover,
    &:focus {
      color: ${theme.colors.secondary};
      text-decoration: underline ;
    }
  }
  ${headroomCss}
  ${reset}
  
`

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) => {
  return isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }
}

const PartialNavLink = (props: any) => (
  <Link getProps={isPartiallyActive} {...props}>
    {props.children}
  </Link>
)

const Wrapper = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
 /* display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }*/
`

const Header = styled(Box)<{ bg: string }>`
  z-index:1;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  background:transparent;
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    position: relative;
    width: 100%;
 background: ${props => props.bg};
  }


 /* position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

 

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
*/
  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`

const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 1.5;
     margin-left: ${props => props.theme.space[4]};
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      margin-left: ${props => props.theme.space[4]};
    }

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }
  }
`

const Main = styled.main`
    flex-grow:1; 
    display: flex;
    align-items: center;
    justify-content: center;

/*  @media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }*/
`


//const Footer = styled.footer<{ color: string }>`
const Footer = styled(Box)<{ color: string }>`
  z-index:1;
  position: relative;
  bottom:0;
  left:0;
  width:100%;
  
/*  background: #A4CE3C;
  
background: -webkit-linear-gradient(top left, #A4CE3C, #91AE4A);
background: -moz-linear-gradient(top left, #A4CE3C, #91AE4A);
background: linear-gradient(top left, #A4CE3C, #91AE4A);
  position: relative;
  margin-top:5rem;
  padding-top: 10rem;*/
 /* background-color:  ${props =>props.color}
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    padding-top: 7rem;
  }*/

  /*position: fixed;
  width: ${props => props.theme.sidebarWidth.big};
  bottom: 0;

  background: ${props => props.color};

  color: ${props => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')};

  a {
    color: ${props => readableColor(`${props.color}`)};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }*/

`

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: 'black',
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

const Layout = ({ children, color }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Headroom calcHeightOnResize disableInlineStyles>
              <Flex
                flexWrap="nowrap"
                flexDirection={['row', 'row', 'row', 'row']}
                alignItems={['center', 'center', 'center', 'center']}
                justifyContent="space-between"
              >
                <Box >
                
                   <Link to="/" aria-label="Accueil"><Logo /></Link>
                  <Link to="/mentions-legales">Mentions légales</Link>
                </Box>
              </Flex>
            </Headroom>
        <Wrapper>

           <Header bg={color} as="header"  py={[2,4,6]}   px={[6, 6, 8, 10]}  >
               <Flex
                flexWrap="nowrap"
                flexDirection={['row', 'row', 'row', 'row']}
                alignItems={['center', 'center', 'center', 'center']}
                justifyContent="space-between"
              >
                <Box >
                
                   <Link to="/" aria-label="Accueil"><Logo /></Link>
                  <Link to="/mentions-legales">Mentions légales</Link>
                </Box>
              </Flex>
          </Header>
          
          <Main>{children}</Main>
       

         {/* <Footer  color={color} as="footer" flexDirection="column" alignItems="flex-start" justifyContent= "flex-end">
        <Wave orientation="bottom" />
         <Box fontSize={0} px={[5, 6, 8, 10]}  my={2} ><a href="https://oliviergenevest.info" target="blank">crédits</a>
              <Link to="/mentions-legales">Mentions légales</Link> - 2019</Box>
       </Footer>
          */}
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.defaultProps = defaultProps

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
