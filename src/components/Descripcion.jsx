import React from 'react';
import styled from 'styled-components';
// import styles from '../edits/styles.json';



const DescripcionContainer = styled.div`
    color: ${({colorTexto}) => colorTexto};
    font-size: ${({fontSize}) => fontSize};
    text-transform: ${({textTransform}) => textTransform};
`

const P = styled.p`
    font-weight: ${({fontWeigth}) => fontWeigth};
`

function Descripcion({ text, styles }) {

    const { descripcion, general } = styles;
    const colorTexto = descripcion.colorTexto;
    const fontSize = descripcion.fontSize;
    const textTransform = descripcion.textTransform;
    const fontWeigth = descripcion.fontWeigth;

    const lineas = text.split('\n').map((linea, index, array) => (
        <React.Fragment key={index}>
          {linea}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));

    if (text !== "" ) {
        return (
            
            <DescripcionContainer
                colorTexto={colorTexto}
                fontSize={fontSize}
                textTransform={textTransform}
            >
                <P fontWeigth={fontWeigth} >{lineas}</P>
            </DescripcionContainer>
        );
    } else {
        return null;
    }   


}

export default Descripcion;