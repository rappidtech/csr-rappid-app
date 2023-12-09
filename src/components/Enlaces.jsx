import React, { lazy, Suspense } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconMap from '../iconMap'
import styled from 'styled-components';
// import { useState } from 'react';

const AccordionButton = lazy(() => import('./Accordion.jsx'));

const EnlacesListItem = styled.li
`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Enlace = styled.a`
	flex-grow: 1;
	width: ${({widthMD}) => widthMD};
	padding: ${({padding}) => padding};
	margin: ${({margin}) => margin};
	background-color: ${({colorFondo}) => colorFondo};
	color: ${({colorTexto}) => colorTexto};
	font-weight: ${({fontWeigth}) => fontWeigth};
	text-align: center;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: ${({justifyContent}) => justifyContent};
	
	border-radius: ${({borderRadius}) => borderRadius};
	border: ${({border}) => border};	
	text-transform: ${({textTransform}) => textTransform};
	transform: scale(1);
  	transition: transform 0.3s ease;
	box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
	cursor: pointer;

	&:hover {
		background-color: ${({colorHover}) => colorHover};
		transform: ${({scaleLink}) => scaleLink};
	}

	&:active {
		background-color: ${({colorActive}) => colorActive};
	}
	@media (max-width: 768px) {
		width: ${({widthSM}) => widthSM};
	}
`;

const Icono = styled(FontAwesomeIcon)`
	margin-right: 10px;
	color: ${({colorIcon}) => colorIcon};
	font-size: ${({fontSize}) => fontSize};
`;

// const arrow = "/img/svg/arrow.svg";

function Enlaces({ data, styles }) {

	const links = data.enlaces;
	
	const { enlaces } = styles;
	const colorFondo = enlaces.colorFondo;
	const colorTexto = enlaces.colorTexto;
	const colorHover = enlaces.colorHover;
	const borderRadius = enlaces.borderRadius;
	const colorIcon = enlaces.colorIcon;
	const fontSize = enlaces.fontSize;
	const fontWeigth = enlaces.fontWeigth;
	const textTransform = enlaces.textTransform;
	const scaleLink = enlaces.scaleLink;
	const margin = enlaces.margin;
	const padding = enlaces.padding;
	const border = enlaces.border;
	const colorActive = enlaces.colorActive;
	const justifyContent = enlaces.justifyContent;
	const widthMD = enlaces.widthMD;
	const widthSM = enlaces.widthSM;
	const leftIcon = enlaces.leftIcon;
	const rightIcon = enlaces.rightIcon;

	
	const accordionLinks = links.filter(link => link.render === 'si' && link.accordion === 'si');
    const regularLinks = links.filter(link => link.render === 'si' && link.accordion !== 'si');

    return (
		(	<>
				<ListGroup>
					<Suspense fallback={<div>Loading...</div>}>
						<AccordionButton links={accordionLinks} data={data} styles={styles}>
							{accordionLinks.map((link, index) => (
								<EnlacesListItem key={index}>
								</EnlacesListItem>
							))}		
						</AccordionButton>		
					</Suspense>
					{regularLinks.map((link, index) => (
						<EnlacesListItem key={index}>
							<Enlace 
								href={link.url} 
								target='blank' 
								widthMD={widthMD}
								padding={padding}
								margin={margin}
								colorFondo={colorFondo}
								colorTexto={colorTexto}
								fontWeigth={fontWeigth}
								justifyContent={justifyContent}
								borderRadius={borderRadius}
								border={border}
								textTransform={textTransform}
								colorHover={colorHover}
								scaleLink={scaleLink}
								colorActive={colorActive}
								widthSM={widthSM}
							>
								{link.iconImg ? (
									<img className={leftIcon} src={link.iconImg} alt={link.nombre} style={{ marginRight: '50px' }} />
									) : (
										<Icono
											className={leftIcon} 
											icon={iconMap[link.icon]}
											colorIcon={colorIcon}
											fontSize={fontSize}
										/>
										)}								
								{link.nombre}
								<Icono
									style="" 
									className={rightIcon} 
									icon={iconMap[link.icon]} 
									colorIcon={colorIcon}
									fontSize={fontSize}
								/>							
							</Enlace>
						</EnlacesListItem>
							
					))} 
				</ListGroup>
			</>
		  ));
    ;
  }

export default Enlaces;
