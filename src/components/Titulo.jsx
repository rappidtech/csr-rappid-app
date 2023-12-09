import React from 'react';
import styled from 'styled-components';
// import styles from '../edits/styles.json';


const TituloContainer = styled.div`
    margin: ${({margin}) => margin};
    color: ${({colorTexto}) => colorTexto};
    text-transform: ${({textTransform}) => textTransform};
    `
    
const TituloText = styled.h1`
    font-size: ${({fontSize}) => fontSize};
    margin: 0 0 0 0;};
`

function Titulo({ data, styles }) {

    const text = data.titulo;
    
    const { titulo, general } = styles;
    const margin = titulo.margin;
    const colorTexto = titulo.colorTexto;
    const textTransform = titulo.textTransform;
    const fontSize = titulo.fontSize;

    return (
        <TituloContainer
            margin={margin}
            colorTexto={colorTexto}
            textTransform={textTransform}
        >
            <TituloText
                fontSize={fontSize}
            >
                {text}</TituloText>
        </TituloContainer>
    );
}

export default Titulo;