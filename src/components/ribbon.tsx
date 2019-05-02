import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../config/theme.ts'
import Wave from '../elements/Wave'
const Wrapper = styled.div`
  position: absolute;
  display:flex;
  border:1px solid white;
  z-index: 5;
 /* margin:5rem;*/
  padding:0 3rem;
  background-color:#494992;
//  transform:rotate(-45deg);
  overflow: hidden ;
 
  span {
    padding:1rem 2rem; 
    color:white;
  }
 
  ${props => props.orientation === 'top-left' && 'top: 0;left:0;'};
  ${props => props.orientation === 'bottom-left' && 'bottom: 0;left:0;'};
  ${props => props.orientation === 'top-right' && 'top: 0;right:0;'};
  ${props => props.orientation === 'bottom-right' && 'bottom: 0;right:0;'};

`

const Ribbon = ({orientation, text}) => {

	return(
			<Wrapper orientation={orientation}>
			   <span>{text}</span>
      
			</Wrapper>
		)
}

export default Ribbon

Ribbon.propTypes = {
  orientation: PropTypes.oneOf(['top-left', 'bottom-left','top-right', 'bottom-right' ]),
  text:PropTypes.string,
}
Ribbon.defaultProps = {
  orientation: 'top-right',
  text:"Nouveauté 2019 !",
}