import React from 'react'
import Img from 'gatsby-image'
import { AnimatedBox } from '../elements'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../config/theme.ts'
import Wave from '../elements/wave'

const Wrapper = styled.div`
	padding:0;
	margin:0;
	position:relative;
	background-color: ${({ bc }) => bc};	
	/*background-color: transparent;	*/
`

const ImgBackground = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: ${props => props.theme.breakpoints[3]}) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const PAnimatedBox = styled(AnimatedBox)`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  h1 {
  position: absolute;
    color: white;
    bottom: 0;
    top:0;
    padding: 1rem;
    /*background-color: #ffffff;*/
    border-radius: 20% 20% 0 0;
}
`


const HeaderImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className
}) => {
	return ( 
         <Wrapper bc={overlayColor}>
        	<ImgBackground 
        		fluid={fluid}
		      	title={title}
		      	height={height}
		      	mobileHeight={mobileHeight}
		    />
           	<PAnimatedBox  py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]} className={className}>
           		{children}
           		
        	 
         	</PAnimatedBox>
          <Wave orientation="bottom" fill="white"/>
         </Wrapper>
      )    
 }

HeaderImage.propTypes = {
  fluid: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};
HeaderImage.defaultProps = {
  height: null,
  mobileHeight: "250px",
  overlayColor: "transparent",
  children: null,
  className: null
};

export default HeaderImage
