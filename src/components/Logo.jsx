import React from 'react';
import styled from 'styled-components';
// import styles from '../edits/styles.json';

const LogoContainer = styled.div`
    margin: ${({margin}) => margin};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    width: 100%;
`

const LogoImg = styled.img`
    height: ${({logoSize}) => logoSize};
    width: ${({logoSize}) => logoSize};
    border-radius: 50%;
`


function Logo({ data, styles }) {
    
    const src = data.logo;
    const link = data.enlacePrincipal;

    const { logo } = styles;
    const logoSize = logo.logoSize;
    const margin = logo.margin;

    return (
        <LogoContainer
            margin={margin}
        >
            <a target='blank' href={link}>
                <LogoImg 
                    src={src} alt="Logo" 
                    logoSize={logoSize}
                />
            </a>
        </LogoContainer>
    );
}

export default Logo;
