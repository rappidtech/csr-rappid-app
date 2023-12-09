import React from 'react';
import styled from 'styled-components';
// import styles from '../edits/styles.json';


const PContainer = styled.p`
	color: ${({colorTexto}) => colorTexto};
	margin: 0;
`

const AFooter = styled.a`
	color: ${({colorTexto}) => colorTexto};
	text-decoration: none;
	text-decoration: underline;
	margin-left: 5px;
`

function Footer({data, styles}) {

	const { footer } = styles;
	const colorTexto = footer.colorTexto;

	return (
		<>
			{data.poweredBy !== '' ? (
				<div className="powered-by">
					<PContainer colorTexto={colorTexto}>
						Powered by    
					</PContainer>
					<AFooter 
						className='a-footer' 
						href={data.enlaceRappid}
						colorTexto={colorTexto}
					>    
						{data.poweredBy} 
					</AFooter>
				</div>
			) : (
				<></>
			)}
		</>
		);
}



export default Footer;
