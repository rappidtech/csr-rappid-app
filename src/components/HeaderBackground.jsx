import React from 'react';
import styled from 'styled-components';
// import styles from '../edits/styles.json';

const Background = styled.div`
    position: ${({headerPosition}) => headerPosition};
    top: 0;
    left: 0;
    background-image: ${({headerBackground}) => headerBackground};
    background-size: ${({headerBackgroundSize}) => headerBackgroundSize};
    background-position:  ${({headerBackgroundPosition}) => headerBackgroundPosition};
    background-repeat: ${({headerBackgroundRepeat}) => headerBackgroundRepeat};
    height:  ${({headerHeight}) => headerHeight};
    width:  ${({headerWidth}) => headerWidth};
    z-index: 0;

`

function HeaderBackground({styles}) {

    const headerBackground = styles.general.headerBackground
    const headerBackgroundSize = styles.general.headerBackgroundSize
    const headerBackgroundPosition = styles.general.headerBackgroundPosition
    const headerBackgroundRepeat = styles.general.headerBackgroundRepeat
    const headerHeight = styles.general.headerHeight
    const headerWidth = styles.general.headerWidth
    const headerPosition = styles.general.headerPosition

    return (
        <>
            <Background 
                className="header-background"
                headerPosition={headerPosition}
                headerBackground={headerBackground}
                headerBackgroundSize={headerBackgroundSize}
                headerBackgroundPosition={headerBackgroundPosition}
                headerBackgroundRepeat={headerBackgroundRepeat}
                headerHeight={headerHeight}
                headerWidth={headerWidth}
            >
                
            </Background>   
        </>
    )
}

export default HeaderBackground