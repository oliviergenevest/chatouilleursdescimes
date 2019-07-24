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
  position:absolute;
  top:0;
  display: flex; 
  align-items: center; 
  justify-content: center;
  height: 100%;
  width: 100%;
  h1 {
    text-align:center;
    color: white;
    padding: 1rem;
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
  height: "50vh",
  mobileHeight: "60vh",
  overlayColor: "#00000087",
  children: null,
  className: null
};

export default HeaderImage
