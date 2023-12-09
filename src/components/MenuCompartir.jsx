import React, { lazy, Suspense, useEffect } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

// import data from '../edits/data.json';
// import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const BotonCompartir = lazy(() => import("./CambiarTexto"));


const MenuCompartir = styled.div`
    display: ${props => props.mostrar ? 'flex' : 'none'};
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;
const Titulo = styled.h3`
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;  
    margin: 0 0 0 0;
`;

const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
`;


const BotonCerrar = styled.button`
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #f9f9f9;
    border: none;
    font-size: 1.5em;
    font-weight: regular;
    padding: 2px;
    border-radius: 5px;
    width: 30px;
    height: 20px;

    
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f9f9f9;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 15px;
    width: 350px;
    min-height: 500px;
    max-height: 550px;
    
`
const ListaRedes = styled.ul`
    padding: 0;
    margin: 30px 30px;
    display: flex;
    flex-direction: column;
    font-weight: regular;
`;

const A = styled.a`
    text-decoration: none;
    color: #000;
    padding: 6px;

    &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
        border-radius: 5px;
    }
`

const Enlace = styled.a`
    font-size: 0.9em;
    text-align: center;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-decoration: none;
    
    &:hover {
        cursor: pointer;
        background-color: #f4f4f4;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 38px;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const P = styled.a`
    font-size: 0.9em;
    text-align: center;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #000;
    color: #f9f9f9; 
    text-decoration: none;
    &:hover {
        cursor: pointer;
        background-color: #212121;
        color: #f9f9f9;
    }
`

function TarjetaCompartir({ mostrar, onCerrar, data }) {
    
    useEffect(() => {
        
        const handleCloseOnOutsideClick = (event) => {
            if (mostrar && event.target.contains(document.getElementById('tarjeta-compartir'))) {
                onCerrar();
            }
            
        };
    
        // Agregar el manejador de eventos al montar el componente
        document.addEventListener('mousedown', handleCloseOnOutsideClick);
    
        // Limpiar el manejador de eventos al desmontar el componente
        return () => {
            document.removeEventListener('mousedown', handleCloseOnOutsideClick);
        };
        }, [mostrar, onCerrar]);

    // const enlace = "  " + enlacePrincipal;
    // const enlacePrincipalCorto = data.enlacePrinCorto;
    const enlacePrincipal = data.enlacePrincipal;
    const enlaceRappid = data.enlaceRappid;

    return (
        <MenuCompartir mostrar={mostrar} id="tarjeta-compartir">
            <CardContent>
                <FlexEnd>
                    <BotonCerrar  onClick={onCerrar}>
                        <A className="close" href="#">&times;</A>
                    </BotonCerrar>
                </FlexEnd>
                <Header>
                    <Titulo>Compartir este sitio</Titulo>
                </Header>
                <ListaRedes>
                    <A href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(enlacePrincipal)}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ marginRight: "1rem", fontSize: "1.5rem", color:"#666666" }} icon={faFacebook} />
                        <span>Compartir en Facebook</span>
                    </A>
                    <A href={`https://twitter.com/intent/tweet?text=Mira%20este%20sitio%20web%20${encodeURIComponent(enlacePrincipal)}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ marginRight: "1rem", fontSize: "1.5rem", color:"#666666" }} icon={faTwitter} />
                        <span>Compartir en Twitter</span>
                    </A>
                    <A href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(enlacePrincipal)}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ marginRight: "1rem", fontSize: "1.5rem", color:"#666666" }} icon={faLinkedin} />
                        <span>Compartir en LinkedIn</span>
                    </A>
                    <A href={`https://wa.me/?text=${encodeURIComponent(enlacePrincipal)}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon style={{ marginRight: "1rem", fontSize: "1.5rem", color:"#666666" }} icon={faInstagram} />
                        <span>Compartir en Whatsapp</span>
                    </A>
                </ListaRedes>
                <Center>
                    <Enlace>
                        <Suspense fallback={<div>Loading...</div>}>
                            <BotonCompartir url={enlacePrincipal} />
                        </Suspense>
                    </Enlace>
                    <P href={enlaceRappid}>
                        Crea tus sitios con Rappid Tech
                    </P>
                </Center>
                {/* <Center>
                </Center> */}
        
            </CardContent>
        </MenuCompartir>
    );
}

export default TarjetaCompartir;