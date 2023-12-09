import React, { lazy, Suspense } from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
// import styles from '../edits/styles.json';
// import data from '../edits/data.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import iconMap from '../iconMap.jsx'
const AccordionContent = lazy(() => import('./AccordionContent.jsx'));

const StyledAccordion = styled.div`
	.accordion-item,
	.accordion-button {
		background-color: ${({colorFondo}) => colorFondo};
		border: none;
		color: ${({colorTexto}) => colorTexto};
		font-weight: ${({fontWeigth}) => fontWeigth};
		width: ${({widthMD}) => widthMD};
		box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
		justifyContent: ${({justifyContent}) => justifyContent};
	
		&:hover {
			background-color: ${({colorHover}) => colorHover};
		}

		&:active,
		&:focus {
			background-color: ${({colorActive}) => colorActive};
			box-shadow: none
		}

		.accordion-item{
			box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
		}

		@media (max-width: 768px) {
			width: ${({widthSM}) => widthSM};
		}
	}

	.accordion-button {
		padding: 12px 20px;
		margin: 7px 0;
	}

	button.accordion-button.collapsed::after {
		background-image: url(/img/svg/arrow-down.svg);
	}

	button.accordion-button::after {
		background-image: url(/img/svg/arrow-down.svg);
	}
`;

const Button = styled.button`
    background-color: #000; 
    border: none;
	border-radius: 20px;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
	margin: 10px 0 0 0;
`


function AccordionButton({ links,  data , styles }) {
	
	
	const [activeKey, setActiveKey] = useState(null);
	const accordionFilter = links.filter(link => link.render === 'si' && link.accordion === 'si')
	
	const handleToggle = (eventKey) => {
        setActiveKey(activeKey === eventKey ? null : eventKey);
    };

	// const enlacesAcordeon = data.enlaces;
	// const colorIcon = enlaces.colorIcon;
	// const fontSize = enlaces.fontSize;
	const enlaces = styles.enlaces;
	const colorFondo = enlaces.colorFondo;
	const colorTexto = enlaces.colorTexto;
	const colorHover = enlaces.colorHover;
	const fontWeigth = enlaces.fontWeigth;
	const colorActive = enlaces.colorActive;
	const widthMD = enlaces.widthMD;
	const widthSM = enlaces.widthSM;
	const justifyContent = enlaces.justifyContent;

	return ( 
		<>
			{accordionFilter.map((accordionlink, accordionindex) => (
				<StyledAccordion 
					key={accordionindex}
					colorFondo={colorFondo}
					colorTexto={colorTexto}
					fontWeigth={fontWeigth}
					widthMD={widthMD}
					justifyContent={justifyContent}
					colorHover={colorHover}
					colorActive={colorActive}
					widthSM={widthSM}
				>
					<Accordion defaultActiveKey="Accordion" activeKey={activeKey} onSelect={handleToggle}>
						<Accordion.Item eventKey={String(accordionindex)}>
							<Accordion.Header>
								<img className='icon-link' src={accordionlink.iconImg} alt={accordionlink.nombre} style={{ marginRight: '10px' }} />
								{accordionlink.nombre}
							</Accordion.Header>
							<Accordion.Body >
								<Suspense fallback={<div>Loading...</div>}>
									<AccordionContent item={data.carrusel[accordionindex]} styles={styles} />
								</Suspense>
								<Button>
									<a>Ver más</a>
								</Button>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</StyledAccordion>
			))}
		</>
	);
}

export default AccordionButton;