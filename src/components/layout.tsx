import React, {useState} from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import { config, useSpring, animated } from 'react-spring'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import { HamburgerSpring } from 'react-animated-burgers'
import 'typeface-work-sans'
import 'typeface-boogaloo'
import 'typeface-acme'
import { AnimatedBox, AnimatedFlex, Box, Flex, Button } from '../elements'

import theme from '../../config/theme'
import reset from '../styles/reset'

import Logo from './logo'
import SubHeader from './subheader'

import Partenaires from './partenaires'
import Footer from './footer'
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
    /*  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #494992;*/
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
      @media (max-width: 600px) {
      font-size: 16px;
      }
  }

/*  a {
    transition: all 0.3s ease-in-out;
    color:inherit;
    text-decoration:none;
    &:hover,
    &:focus {
      color: ${theme.colors.secondary};
      text-decoration: underline ;
    }
  }*/
  a {
  display: inline-block;
  position: relative;
  color: inherit;
   text-decoration: none ;
}
a::after {
  content: '';
  position: absolute;
  width: 50%;
  transform: scaleX(0);
  height: 1px;
  bottom: -2px;
  left: 0;

  background-color: ${theme.colors.secondary};
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
 
}
ul {
  list-style-type:none;
 /* margin: 0;*/
  padding: 0;
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
`

const Header = styled(Box)<{ bg: string }>`
   position: relative;
  width:100%;
  background-color:black;
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    position: relative;
    width: 100%;
    background: ${props => props.bg};
  }
  /* hamburger button */
  button {
     @media (min-width: ${props => props.theme.breakpoints[2]}) {
        display:none;
    }
  }

`

const NavTop = styled(Flex)<{ color: string }>`
  a {
    text-transform:uppercase;
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[1]};
    line-height: 1.5;
     margin-left: ${props => props.theme.space[4]};
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[4]};
      display:none;
    }
/*
    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }*/
  }
`


const Nav = styled(Flex)<{ color: string }>`
  a {
    text-transform:uppercase;
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[1]};
    line-height: 1.5;
     margin-left: ${props => props.theme.space[4]};
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[1]};
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
    position:relative;
    flex-grow:1; 
    display: flex;
    flex-direction:column;
    align-items: center;
    align-items: stretch;
    justify-content: center;

/*  @media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }*/
`


const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  background: ${props => props.theme.colors.primary};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  color:black;
`
/*MENU MOBILE*/
const MenuMobile = styled(animated.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  z-index:500;

`
const ContentMobile = styled(Flex)`
height:100%;
padding-top:168px;
box-sizing:border-box;

`


type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: 'black',
  header:true,
  footer:true,
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
};

const Layout = ({ children, color, header, footer }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)
  // Mobile Menu logic
  const [mobileNavOpen, setMobileNavOpen] = useState(false) // closed by default
  const MenuAnimation = useSpring({
  native: true,
  to: { opacity: mobileNavOpen ? 1 : 0, transform: mobileNavOpen ? 'translate3d(0,0,0)' : 'translate3d(0,-100%, 0)', backgroundColor: mobileNavOpen ? theme.colors.primary : theme.colors.black},
 
  
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
    
        <Wrapper>
          

          {header &&
            <>
            <ScrollLock  isActive={mobileNavOpen} >
              <MenuMobile style={ MenuAnimation}>

                <ContentMobile flexDirection={['column']}
                    alignItems={['center']}
                    justifyContent="center"
                    pb={[6]}
                    >
               
               
                  {data.navigation.edges.map(({ node: item }) => (
                  <PartialNavLink to={item.link} key={item.name} >
                    {item.name}
                  </PartialNavLink>
                  ))}
                </ContentMobile>    
              </MenuMobile>
             </ScrollLock>
         

          <Headroom calcHeightOnResize disableInlineStyles>
           <SubHeader/>
           <Header bg={color} as="header" m={0} py={[2,4,6]}   px={[6, 6, 8, 10]}  >

               <Flex
                flexWrap="nowrap"
                flexDirection={['row', 'row', 'row', 'row']}
                alignItems={['center', 'center', 'center', 'center']}
                justifyContent="space-between"
              >
                 <Link to="/" aria-label="Accueil"><Logo fixed/></Link>
                  <NavTop  color={color}>
                   
                   {data.navigation.edges.map(({ node: item }) => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                  ))} 
                  </NavTop>
                  <HamburgerSpring isActive={mobileNavOpen} toggleButton={() => {setMobileNavOpen(!mobileNavOpen)}} buttonStyle={{ outline: "none" }} barColor="white" />
                  
                {/*
                  <AnimatedBox py={[2, 2, 3, 3]}  >
                <PButton color="red" py={4} px={8}>
              
                 <a href="https://www.billetweb.fr/chatouilleurs-des-cimes" target="blank" style={{'color':'black'}}>Réservation en ligne</a>
               </PButton>
              </AnimatedBox>*/}
                 
              </Flex>
            </Header>
          </Headroom>
          </>
        }

          <Main>{children}</Main>
          <Partenaires/>
          {footer && <Footer/>}
          
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
