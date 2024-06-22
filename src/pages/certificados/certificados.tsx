import React from 'react';
import Slogan from '../../components/shared/slogan/slogan';
import RegisterItem from '../../components/shared/RegisterItem/RegisterItem';

const Certificados: React.FC = () => {
	const registerCertificate = [
		{
			id: 1,
			title: 'Rocktseate',
			describe: 'NLW Unite DevOps',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
		},
		{
			id: 2,
			title: 'Rocktseate',
			describe: 'NLW Unite NodeJs',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
		},
		{
			id: 3,
			title: 'Rocktseate',
			describe: 'NLW Unite ReactJs',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
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
			image:
				'https://yt3.googleusercontent.com/ytc/AIdro_kI7M3X-JtxEhfgHBH7x2f3o02iygpgFtCVFXCBP7KT2vs=s176-c-k-c0x00ffffff-no-rj',
		},
		{
			id: 6,
			title: 'Udemy',
			describe: 'Cyber security',
			image:
				'https://www.mobills.com.br/blog/wp-content/uploads/2022/07/logo-udemy.png',
		},
		{
			id: 7,
			title: 'Rocktseate',
			describe: 'CleanCode',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
		},
		{
			id: 8,
			title: 'Rocktseate',
			describe: 'SEO para DEVS',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
		},
		{
			id: 9,
			title: 'Rocktseate',
			describe: 'NLW Unite ReactNative',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
		},
		{
			id: 10,
			title: 'Rocktseate',
			describe: 'NLW Unite DevOps',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/408875191_371656942038770_4747836278300822018_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rhV2Ocr_FBAQ7kNvgGDjuU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDgHOqQMNyLL7NmzN53mzfLxkKsnTUX2UEDaugcoxW9uA&oe=667B828E',
		},
		{
			id: 11,
			title: 'Cisco',
			describe: 'Introduction to Cybersecurity',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/325413161_574058747625679_5034740008845582399_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1E4bEp4tK3QQ7kNvgH73qU6&_nc_ht=scontent.fthe8-1.fna&oh=00_AYDKuAnxX46HbP1LTvuTfYPx2IUpxBUMmyuATSAzlPwH4A&oe=667B8129',
		},
		{
			id: 12,
			title: 'Ceped Cursos',
			describe: 'Montagem e Manutenção de Computadores',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/361621778_662111975957868_2905293872971895241_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K8SdXqOiV4QQ7kNvgFM3f8R&_nc_ht=scontent.fthe8-1.fna&oh=00_AYCStAlGiOc7jSsQN168LdZTonpp2So1X3iCwxh-D91gMg&oe=667B6FBF',
		},
		{
			id: 13,
			title: 'Fundação Bradesco',
			describe: 'Introdução a Redes de Computadores',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/352724638_970403100945701_6671347816436186509_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FPiZBRSV0FwQ7kNvgFVSj__&_nc_ht=scontent.fthe8-1.fna&oh=00_AYA6rQSW53r_qeJBS0qMbBuq47P9GCEzLlZ1Q5PyQ2j_XA&oe=667B9697',
		},
		{
			id: 13,
			title: 'Fundação Bradesco',
			describe: 'Fundamentos de TI: Hardware e Software',
			image:
				'https://scontent.fthe8-1.fna.fbcdn.net/v/t39.30808-6/352724638_970403100945701_6671347816436186509_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FPiZBRSV0FwQ7kNvgFVSj__&_nc_ht=scontent.fthe8-1.fna&oh=00_AYA6rQSW53r_qeJBS0qMbBuq47P9GCEzLlZ1Q5PyQ2j_XA&oe=667B9697',
		},
		{
			id: 14,
			title: 'Udemy',
			describe: 'Redes TCP-IP',
			image:
				'https://www.mobills.com.br/blog/wp-content/uploads/2022/07/logo-udemy.png',
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
