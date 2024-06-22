import React from 'react';
import * as S from './style'
const Servicos: React.FC = () => {
    return (
        <>
          <S.ContainerSlogan>
            <S.ContainerNameCompany>
                <S.NameCompany>
                    Daniel dos Santos Pessoa
                </S.NameCompany>
                <S.IconArrow />
            </S.ContainerNameCompany >
            <S.TextSlogan>
               Desenvolvedor WEB
            </S.TextSlogan>
            <S.Buttom>
                <S.TextButtom>
                    Entre em Contato
                </S.TextButtom>
            </S.Buttom>
        </S.ContainerSlogan>  
        <S.ContainerSecundary>
			<S.SecundaryLeft>
				<S.ContainerText1>
					<S.Text1>
						Sou uma pessoa apaixonado por tecnologia, busco contribuir para essa
						área e ser um profissional de excelencia. Atualmente foco meus
						estudos no desenvolmento WEB porém, adoro e sempre busco estar
						antenado em área correlatas.
					</S.Text1>
				</S.ContainerText1>
				<S.ContainerLink href="https://google.com.br" target="_blank">
					<S.ContainerText2>
						<S.Text2>MAIS SOBRE DANIEL</S.Text2>
					</S.ContainerText2>
				</S.ContainerLink>
			</S.SecundaryLeft>
			<S.SecundaryRight>
            <S.ContainerImage src='src\assets\img\foto-perfil.png'/>
			</S.SecundaryRight>
		</S.ContainerSecundary> 
        </>
    )
}

export default Servicos;