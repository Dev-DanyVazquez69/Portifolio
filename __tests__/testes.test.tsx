import {render} from '@testing-library/react';
import Footer from '../src/components/shared/footer/footer';
//import Header from '../src/components/HeaderNavBar/navHeader';
import Contato from '../src/pages/tecnologias/tecnologias';
import Home from '../src/pages/home/home';
//import NotFound from '../src/pages/notFound/notFound';
import Portfolio from '../src/pages/projetos/projetos';

describe('jest', () => {
	//teste de renderização de componente
	it('render component footer', () => {
		render(<Footer />);
	});
	// it('render component header', () => {
	//     render(<Header />)
	// })
	//teste de renderização de paginas
	it('render page contato', () => {
		render(<Contato />);
	});
	it('render page home', () => {
		render(<Home />);
	});
	// it('render page notFound', () => {
	//     render(<NotFound />)
	// })
	it('render page portfolio', () => {
		render(<Portfolio />);
	});
});
