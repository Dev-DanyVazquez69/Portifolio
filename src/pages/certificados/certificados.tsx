import React from 'react';
import Slogan from '../../components/shared/slogan/slogan';
import RegisterItem from '../../components/shared/RegisterItem/RegisterItem';

const Certificados: React.FC = () => {
	const registerCertificate = [
		{
			id: 1,
			title: 'Rocktseate',
			describe: 'NLW Unite DevOps',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 2,
			title: 'Rocktseate',
			describe: 'NLW Unite NodeJs',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 3,
			title: 'Rocktseate',
			describe: 'NLW Unite ReactJs',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 4,
			title: 'KA Solutions',
			describe: 'Computação em Nuvem | AWS Discovery Day',
			image:
				'https://www.kasolution.com.br/Content/themes/Ka/Imagens/lg_Ka_original.png',
		},
		{
			id: 5,
			title: 'Solyd offensive security',
			describe: 'Introdução ao Hacking e Pentest 2.0',
			image: 'src/assets/img/solyd.png',
		},
		{
			id: 6,
			title: 'Udemy',
			describe: 'Cyber security',
			image: 'src/assets/img/udemy.png',
		},
		{
			id: 7,
			title: 'Rocktseate',
			describe: 'CleanCode',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 8,
			title: 'Rocktseate',
			describe: 'SEO para DEVS',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 9,
			title: 'Rocktseate',
			describe: 'NLW Unite ReactNative',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 10,
			title: 'Rocktseate',
			describe: 'NLW Unite DevOps',
			image: 'src/assets/img/rocktseate.jpg',
		},
		{
			id: 11,
			title: 'Cisco',
			describe: 'Introduction to Cybersecurity',
			image: 'src/assets/img/cisco.png',
		},
		{
			id: 12,
			title: 'Ceped Cursos',
			describe: 'Montagem e Manutenção de Computadores',
			image: 'src/assets/img/ceped.png',
		},
		{
			id: 13,
			title: 'Fundação Bradesco',
			describe: 'Introdução a Redes de Computadores',
			image: 'src/assets/img/bradesco.png',
		},
		{
			id: 13,
			title: 'Fundamentos de TI: Hardware e Software',
			describe: 'Introdução a Redes de Computadores',
			image: 'src/assets/img/bradesco.png',
		},
		{
			id: 14,
			title: 'Udemy',
			describe: 'Redes TCP-IP',
			image: 'src/assets/img/udemy.png',
		},
	];

	return (
		<>
			<Slogan />
			{registerCertificate.map(certificate => (
				<RegisterItem
					key={certificate.id}
					describe={certificate.describe}
					title={certificate.title}
					image={certificate.image}
				/>
			))}
		</>
	);
};

export default Certificados;
