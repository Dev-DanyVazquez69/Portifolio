import {Outlet} from 'react-router-dom';
import Header from './components/shared/headerNavBar/navHeader';
import Footer from './components/shared/footer/footer';

//<header/> e <footer/> irão persistir em todas as pages
//<outlet/> se refere ao conteudo dinamico de cada page

function App() {
	return (
		<ContainerIndex>
			<Header />
			<Outlet />
			<Footer />
		</ContainerIndex>
	);
}

export default App;

import styled from 'styled-components';

const ContainerIndex = styled.div`
	overflow: hidden;
`;
//