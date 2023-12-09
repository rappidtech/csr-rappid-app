import React from 'react';
import styled from 'styled-components';
// import styles from '../edits/styles.json';


const SubtituloContainer = styled.div`
    margin: ${({margin}) => margin};
    color: ${({colorTexto}) => colorTexto};
    font-size: ${({fontSize}) => fontSize};
    text-transform: ${({textTransform}) => textTransform};
`

const P = styled.p`
    font-weight: ${({fontWeigth}) => fontWeigth};
    margin: 2px 0 2px 0;
`

function Subtitulo({ data, styles }) {

    const text = data.subtitulo;

    const { subtitulo, general } = styles;
    const margin = subtitulo.margin;
    const colorTexto = subtitulo.colorTexto;
    const fontSize = subtitulo.fontSize;
    const textTransform = subtitulo.textTransform;
    const fontWeigth = subtitulo.fontWeigth;

    const lineas = text.split('\n').map((linea, index, array) => (
        <React.Fragment key={index}>
          {linea}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));

    return (
        <SubtituloContainer
            margin={margin}
            colorTexto={colorTexto}
            fontSize={fontSize}
            textTransform={textTransform}
        >
            <P
                fontWeigth={fontWeigth}
            >{lineas}</P>
        </SubtituloContainer>
    );
}

export default Subtitulo;