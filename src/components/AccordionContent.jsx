import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
// import styles from '../edits/styles.json';
// import data from '../edits/data.json';

const ImgStyle = styled.img`
    height: ${({height}) => height};
    width: ${({width}) => width};
    border-radius: 5px;
`

const ItemStyle = styled.div `
    display: flex,
    justifyContent: center,
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    color: ${({colorTexto}) => colorTexto};})};
    margin-left: 10px;
    text-align: left;
`

const Title = styled.h3`
    font-size: 1.5rem;
`

const Description = styled.p`
    font-size: 0.8rem;
`

const AccordionContent = ({ item, styles }) => {

    const { carrusel, enlaces } = styles;
    const colorTexto = enlaces.colorTexto;
    const height = carrusel.height;
    const width = carrusel.width;

    return (
        <>
            <Carousel indicators={false} prevIcon={null} nextIcon={null}>
                {item.img.map((img, index) => (
                    <Carousel.Item key={index} interval={2000}>
                        <ItemStyle >
                            <ImgStyle
                                height={height}
                                width={width}
                                src={img}
                                alt={item.titulo[index]}
                            />
                            {item.titulo[index] !== '' ? 
                            <TextContainer
                                colorTexto={colorTexto}
                            >
                                <Title>{item.titulo[index]}</Title>
                                <Description>{item.descripcion[index]}</Description>
                            </TextContainer>
                            : null}        
                                
                        </ItemStyle>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};


export default AccordionContent;
