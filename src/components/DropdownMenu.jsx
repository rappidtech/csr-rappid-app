import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`

function DropdownMenu({ children }) {
    
    return (
		<Container>
			{children}
		</Container>
    );
  }
  
export default DropdownMenu;