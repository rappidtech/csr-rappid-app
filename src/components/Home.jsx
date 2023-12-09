import React, { lazy, Suspense } from "react";
import Logo from './Logo.jsx';
import Footer from './Footer.jsx';
import Subtitulo from './Subtitulo.jsx';
import Descripcion from './Descripcion.jsx';
import Titulo from './Titulo.jsx';
import Redes from './Redes.jsx';
import BotonCompartir from './Compartir.jsx';
import HeaderBackground from './HeaderBackground.jsx';
import styled from 'styled-components';
import { useState } from "react";
// import ContactBanner from './ContactBanner.jsx';

const Enlaces = lazy(() => import('./Enlaces.jsx'));
const TarjetaCompartir = lazy(() => import('./MenuCompartir.jsx'));
const SaveUserData = lazy(() => import('./TestFB.jsx'));

const AppContainer = styled.div`
    background: ${({ fondoApp }) => fondoApp};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const FooterContainer = styled.footer`
    background-color: ${({ fondoFooter }) => fondoFooter};
    display: flex;
    width: 100%;
    flex-direction: column;
    height: ${({ height }) => height};
    align-items: center;
    justify-content: center;
`;

const Main = styled.main`
    margin: -20px 0 12px 0;
`

export default function Home( { data, styles } ) {
	
	const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

	if (!styles) {
        console.error('Styles is undefined.');
        return null;
    }

	const { general, footer } = styles;
	const fondoApp = general.backgroundColor;
	const fondoFooter = footer.backgroundColor;
	const height = footer.height


    const toggleTarjeta = () => {
        setMostrarTarjeta(!mostrarTarjeta);
    };

  return (
    <>	
		<Suspense fallback={<div>Loading...</div>}>
			<TarjetaCompartir mostrar={mostrarTarjeta} onCerrar={toggleTarjeta} data={data}/>
		</Suspense>
		<AppContainer className="App" fondoApp={fondoApp}>
			<HeaderBackground styles={styles}/> 
			
			<div id="compartir">
				<BotonCompartir onToggle={toggleTarjeta} styles={styles} />
			</div>
			{/* <div>
				<ContactBanner/>
			</div> */}
			
			<header className="App-header">
				<Logo data={data} styles={styles}/>
				<Titulo data={data} styles={styles}/>
				<Subtitulo data={data} styles={styles}/>
				<SaveUserData/>
			</header>
				<Descripcion text={data.descripcion} styles={styles}></Descripcion>
				<Redes data={data} styles={styles} />
			<Main>
				<Suspense fallback={<div>Loading...</div>}>
					<Enlaces data={data} styles={styles} />  
				</Suspense>
			</Main>
			<FooterContainer fondoFooter={fondoFooter} height={height}>
				<Footer data={data} styles={styles}/>
			</FooterContainer>
		</AppContainer> 
	</>
  );
}