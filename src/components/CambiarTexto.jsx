import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const Enlace = styled.a`
    font-size: 1em;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #000000;
	text-decoration: none !important; 
    
    &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
		text-decoration: none !important; 
    }
`

const textoCopiar = 'Copiar este enlace'

function BotonCompartir({ url }) {
  const [textoBoton, setTextoBoton] = useState(textoCopiar);
  // const space = " "
  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setTextoBoton('¡Copiado!');
        setTimeout(() => setTextoBoton(textoCopiar), 3000);
      })
      .catch(err => {
        console.error("Error al copiar texto: ", err);
      });
  };

return (
    <Enlace onClick={copiarAlPortapapeles}>
      <div >
        <FontAwesomeIcon icon={faCopy} size="1x" />
      </div>
      <div style={{ margin: "0 10px" }}>
        {textoBoton}
      </div>
    </Enlace>
);
}

export default BotonCompartir;
