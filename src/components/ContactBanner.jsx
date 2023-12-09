import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

const A = styled.a`
    position: fixed;
    top: 100px;
    right: 10px;
    background-color: rgb(236, 221, 91);
    color: #333;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    z-index: 50;
    text-decoration: none;
    animation: moveUpDown 1.8s ease-in-out infinite;
    
    @media (max-width: 768px) {
        .phone-line-break {
            display: block;
        }
    }
`


function ContactBanner() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            return window.matchMedia('(max-width: 768px)').matches;
        };

        // Establecer estado inicial
        setIsMobile(checkIfMobile());

        // Añadir listener para cambios de tamaño
        const listener = () => {
            setIsMobile(checkIfMobile());
        };
        window.addEventListener('resize', listener);

        // Limpiar listener
        return () => window.removeEventListener('resize', listener);
    }, []);

    return (
        <A target='blank' href='https://rappidtech.com/links'>
            ¡PEDILO{isMobile && <br className="phone-line-break" />} GRATIS!
        </A>
    );
}

export default ContactBanner;
