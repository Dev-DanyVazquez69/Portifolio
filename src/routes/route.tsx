import {createBrowserRouter} from 'react-router-dom';
import Projetos from '../pages/projetos/projetos.tsx';
import Home from '../pages/home/home.tsx';
import NotFound from '../pages/notFound/notFound.tsx';
import Certificados from '../pages/certificados/certificados.tsx';
import App from '../App.tsx';
import Sobre from '../pages/sobre/sobre.tsx';
import Tecnologias from '../pages/tecnologias/tecnologias.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'tecnologias',
				element: <Tecnologias />,
			},
			{
				path: 'projetos',
				element: <Projetos />,
			},
			{
				path: 'certificados',
				element: <Certificados />,
			},
			{
				path: 'sobre',
				element: <Sobre />,
			},
		],
	},
]);

export default router;
