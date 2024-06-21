import React from 'react';
import * as S from './style';
import RegisterItem from '../../components/shared/RegisterItem/RegisterItem';
import Slogan from '../../components/shared/slogan/slogan';

const Tecnologias: React.FC = () => {
	const stacks = [
		{
			id: 0,
			title: 'Javascript',
			describe: 'Javascript',
			image: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
		},
		{
			id: 1,
			title: 'Typescript',
			describe: 'Typescript',
			image: 'https://img.icons8.com/?size=100&id=HcQEdKCkXUs3&format=png&color=000000',
		},
		{
			id: 2,
			title: 'Git',
			describe: 'Git',
			image: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
		},
		{
			id: 3,
			title: 'Linux',
			describe: 'Linux',
			image: 'https://img.icons8.com/?size=100&id=HF4xGsjDERHf&format=png&color=000000',
		},
		{
			id: 4,
			title: 'Node JS',
			describe: 'Node JS',
			image: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000',
		},
		{
			id: 5,
			title: 'React JS',
			describe: 'React JS',
			image: 'https://img.icons8.com/?size=100&id=t5K2CR8feVdX&format=png&color=000000',
		},
	];

	return (
		<>
			<Slogan />
			<S.ConteinerIndex>
				<S.TitlePage>Tecnologias de trabalho</S.TitlePage>
				<S.ContainerContentStacks>
					{stacks.map(stacks => (
						<RegisterItem
							describe={stacks.describe}
							image={stacks.image}
							title={stacks.title}
							key={stacks.id}
						/>
					))}
				</S.ContainerContentStacks>
			</S.ConteinerIndex>
		</>
	);
};

export default Tecnologias;
