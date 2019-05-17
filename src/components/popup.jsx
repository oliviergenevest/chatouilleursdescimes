import React from "react"
import styled from 'styled-components'
import { AnimatedBox, Box, AnimatedButton, Button, Flex } from '../elements'
import { useSpring, useTransition, animated , config} from "react-spring"
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import theme from '../../config/theme'
import { FaTimes } from 'react-icons/fa'

export default function Popup({ isOpen, setIsOpen, children }) {
  const props = useSpring({
    from: { opacity: 0},
    to: { opacity: isOpen ? 1 : 0},
    config: config.gentle 
  });


  const transitions = useTransition(isOpen, null, {
    from: { transform: `scale(1.5)`, opacity: 0 },
    enter: { transform: `scale(1) `, opacity: 1},
    leave: { transform: `scale(1.5) `, opacity: 0 },
    unique: true,native:true,config: config.gentle 
  });

 

  return (
   /* <ScrollLock isActive={isOpen} >*/
      <Wrapper style={{  zIndex: isOpen ? '6000':'-1'}}>
      
        <Overlay style={props}  />
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <Content key={key}  style={props}>
               
                 <PButtonClose
                  py={4} 
                  px={8}   
                  onClick={() => setIsOpen(false)} >
                <FaTimes />
                </PButtonClose>
            
                <div>{children}</div>
              </Content>
            )
        )}
      </Wrapper>
   /* </ScrollLock>  */
  );
}

const Wrapper = styled(animated.div)`
  position: fixed;
 bottom:0;
 right:0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

 
`;

const Content = styled(AnimatedBox)`
  position: relative;
  z-index:600;
  border-radius: .25em;
  background: white;
  color:black;
  width: 60%;
  max-width:800px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 3rem;
  padding-top:2rem;
  padding-bottom:0rem;
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
     width: 90%;
  }
   @media (max-width: ${props => props.theme.breakpoints[2]}) {
     width: 75%;
  }

`;


const PButtonClose = styled(Button)`
cursor:pointer;
  position:absolute;
  right:-0.75rem;
  top:-1rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  cursor:pointer;
  border-radius: 100%;
  padding: 6px 8px 6px 8px;
    &:hover, &:focus {
        color:black;
      background-color:white;
    }
`

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.84);
  overflow: hidden;
`;
