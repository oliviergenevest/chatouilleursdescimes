import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Logo from './logo'

const WrapSlideshow = styled.div`
height:100%;

> div {
  z-index:1;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
/*  font-size: 25em;*/
  will-change: transform, opacity;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
}
.bgImage{width:100%;
&::before{
    content:'';
     background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 24, 49, 0));
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width:100%;
   }
}
`

/*
const Img1 = () => {
   const data = useStaticQuery(query)
   return (
    <Img 
      fluid={data.img1.childImageSharp.fluid}
      className="bgImage"
      backgroundColor="black"
    />
  )
}
const Img2 = () => {
   const data = useStaticQuery(query)
   return (
    <Img 
      fluid={data.img2.childImageSharp.fluid}
      className="bgImage"
      backgroundColor="black"
    />
  )
}
const Img3 = () => {
   const data = useStaticQuery(query)
   return (
    <Img 
      fluid={data.img3.childImageSharp.fluid}
      className="bgImage"
      backgroundColor="black"
    />
  )
}
*/
const images = [
  ({ style }) => <animated.div style={{ ...style}}> <Logo fixed/><div className="bgDots"></div></animated.div>,
  ({ style }) => <animated.div style={{ ...style}}><Logo fixed/><div className="bgDots"></div></animated.div>,
  ({ style }) => <animated.div style={{ ...style}}><Logo fixed/><div className="bgDots"></div></animated.div>,
]


const Slideshow = () => {
  
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
/*
    initial: {
  transform: "translate3d(-0%,0,0)",
  opacity: 0
},*/
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <WrapSlideshow onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Slide = images[item]
      
        return <Slide key={key} style={props} />
      })}
    </WrapSlideshow>
  )
}

export default Slideshow


export const query = graphql`
  query SlideshowQuery {
    img1: file(sourceInstanceName: { eq: "images" }, name: { eq: "background" }) {
      childImageSharp {
        fluid(quality: 95, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(sourceInstanceName: { eq: "images" }, name: { eq: "5" }) {
      childImageSharp {
        fluid(quality: 95, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(sourceInstanceName: { eq: "images" }, name: { eq: "background2" }) {
      childImageSharp {
        fluid(quality: 95, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`