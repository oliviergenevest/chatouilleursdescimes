import React from "react"
import styled from 'styled-components'
import { AnimatedBox, Box, AnimatedButton, Button, Flex } from '../elements'
import { useSpring, useTransition, animated , config} from "react-spring"
import ScrollLock, { TouchScrollable } from 'react-scrolllock'



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
    <ScrollLock isActive={isOpen} >
      <Wrapper style={{  zIndex: isOpen ? '6000':'-1'}}>
      
        <Overlay style={props}  />
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <Content key={key}  style={props}>
               <Flex p={5} justifyContent={['flex-end']}>
                 <PButtonClose
                  py={4} 
                  px={8}   
                  onClick={() => setIsOpen(false)} >
                 X
                </PButtonClose>
              </Flex>
                <div>{children}</div>
              </Content>
            )
        )}
      </Wrapper>
    </ScrollLock>  
  );
}

const Wrapper = styled(animated.div)`
  position: fixed;
 
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
  border-radius: 2px;
  background: #1f283d;
  align-self: flex-start;
  color: #fff;
  width: 80%;
  min-width:250px;
  max-width:800px;
  box-sizing: border-box;
  min-height: 100px;
  max-height:700px;
  margin: auto;
  margin-top: 150px;
  overflow-y:auto;

`;


const PButtonClose = styled(Button)`
  background: black;
  color: white;
  cursor:pointer;
 align-self:flex-end;
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
