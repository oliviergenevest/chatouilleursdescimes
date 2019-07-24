import React, {useState} from 'react'
import { config, useSpring, useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import { AnimatedBox, AnimatedFlex, Box, Button, Flex, AnimatedButton } from '../elements'
import { transparentize, readableColor } from 'polished'
import siteConfig from '../../config'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'


const WrapperForm = styled(AnimatedFlex)`
	position: fixed;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	overflow:scroll;
	background: ${props => props.theme.colors.primary};
	flex-direction:column;
	justify-content:flex-start;
	align-items:flex-end;
	z-index:3000;
  `
const Form = styled(Box)`
  width:100%; 
  /*height:650px;*/
`
/*
const WrapperButton = styled(Box)`
  z-index:10;
	position: fixed;
  right:0;
  top:0;
  height:auto;
  background-color:transparent;
   `

   */

const PButtonClose = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  cursor:pointer;
`


const BookingForm = ({ isOpen, setBookingFormOpened}) => {

	 

  	const bookingFormAnimation = useSpring({ height: isOpen ? "100%" : "0%" })
  
  	const bookingButtonClose = useSpring({ opacity: isOpen ? 1 : 0 , delay:500})
  	const handleClick = () => {
        setBookingFormOpened(!isOpen)
   
    }
  
	return (
		
		<ScrollLock  isActive={isOpen} >
			<WrapperForm 			
		       style={bookingFormAnimation}
	        >
	            <Box p={5} >
				   <PButtonClose color="black" py={4} px={8}   
				  style={bookingButtonClose}
				  onClick={handleClick}
		            >
					 X
					</PButtonClose>
				</Box>
				{isOpen && 	<Form py={[0,1,2,3,4]} px={[0,4,6,8]} >
					<iframe src="https://www.billetweb.fr/shop.php?event=chatouilleurs-des-cimes" width="100%" height="650px" frameBorder="0"></iframe>
				
				</Form>
			}
				<Box px={[2,4,6,8]} py={4}  alignSelf="flex-start" >
				   Pour toute information complémentaire n'hésitez pas à nous contacter au 06 49 00 99 20.
				</Box>
			</WrapperForm>
			</ScrollLock>
			
	)
}

export default BookingForm