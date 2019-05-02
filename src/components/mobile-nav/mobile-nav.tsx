import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { css } from "styled-components"
import { lighten } from "polished"
import { useSpring, animated, interpolate } from "react-spring"
import { useGesture } from "react-with-gesture"

import Logo from "../logo"
/*import Open from "./icons/Open";
import Close from "./icons/Close";*/


// TODO: refacto!
const resolveBackgroundColor = css`
  ${props =>
    `background-color: ${props.current ? lighten(0.1, "#0D1F21") : "black"}`}
`

const resolveColor = css`
  ${props => `color: ${props.current ? "black" : "#0D1F21"}`}
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${resolveBackgroundColor} 
  ${resolveColor} 
  :hover {
    background-color: ${lighten(0.1, "#0D1F21")};
    color: white;
  }
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`

const DrawerItems = styled.div`
  position: relative;
  top: 55px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

const DrawerItem = styled.div`
  flex: 0 1 auto;
  color: palevioletred;

`

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: ${9999};
  background-color: white;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ overlayColor }) => overlayColor};
  pointer-events: all;
  z-index: ${0};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Drawer = styled(animated.div)`
  position: relative;
  z-index: ${1};
  pointer-events: all;
  background-color: ${"#fff"};
  height: 100%;
  max-width: ${({ width }) => width}px;
  right:0;
`

const ActionHandler = styled(animated.button)`
  border: 0;
  background: transparent;
  border-radius: 0px;
  position: absolute;
  top: 15px;
  left: 5px;
  outline: none;
  z-index: ${100};
`



const MobileNav = ({ overlayColor = "transparent", width = 200 }) => {

  const data = useStaticQuery(query)
  
  // set the active state (true by default)
  const [active, setActive] = useState(true)

  // use react-with-gestures hook
  const [handler, { xDelta, down }] = useGesture()

  const { x, delta } = useSpring({
    native: true,
    to: {
      x: down ? xDelta : 0,
      delta: active ? 0 : -width
    },
    immediate: () => down
  })

  const { offset, color } = useSpring({
    native: true,
    to: {
      offset: active ? 0 : 120,
      color: active ? "#0D1F21" : "red"
    }
  })

 

  useEffect(
    () => {
      if (!down && xDelta !== 0) {
        if (active && xDelta < -(width / 2)) {
          // when active, set the state back to inactive if dragged left for more than 1/2 of the width
          setActive(false)
        } else if (!active && xDelta > width / 4) {
          // when inactive, set the state back to active if dragged right for more than 1/4 of the width
          setActive(true)
        }
      }
    },
    [down] // trigger the effect of when down changes
  )

  return (
    <Wrapper>
      <Overlay overlayColor={overlayColor}>toto</Overlay>
      <Drawer
      
        {...handler}
        width={width}
        style={{
          transform: interpolate(
            [x, delta],
            (x, delta) => `translateX(${Math.min(0, x + delta)}px)`
          )
        }}
      >
        <ActionHandler 
          onClick={() => {
            if (xDelta !== 0) {
              // prevent click if dragging
              return
            }
            setActive(!active);
          }}
          style={{
            color: color,
            transform: offset.interpolate(v => `translateX(${v}%)`)
          }}
        >
          {active ? "BoutonOpen" : "BoutonClose"}
        </ActionHandler>
        <DrawerItems>
         {data.navigation.edges.map(({ node: item }) => (
            <DrawerItem key={item.name}>
              <Link to={item.link} key={item.name}>
                  {item.name}
              </Link>
            </DrawerItem>         
        ))}   
        </DrawerItems>
      </Drawer> 
    </Wrapper>
  )
}

export default MobileNav

const query = graphql`
  query MobileNavQuery {
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