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
			image: 'src/assets/img/javascript.png',
		},
		{
			id: 1,
			title: 'Typescript',
			describe: 'Typescript',
			image: 'src/assets/img/typescript.png',
		},
		{
			id: 2,
			title: 'Git',
			describe: 'Git',
			image: 'src/assets/img/git.png',
		},
		{
			id: 3,
			title: 'Linux',
			describe: 'Linux',
			image: 'src/assets/img/linux.png',
		},
		{
			id: 4,
			title: 'Node JS',
			describe: 'Node JS',
			image: 'src/assets/img/node.png',
		},
		{
			id: 5,
			title: 'React JS',
			describe: 'React JS',
			image: 'src/assets/img/react.png',
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
