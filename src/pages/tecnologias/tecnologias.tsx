import React from 'react';
import * as S from './style'
import RegisterItem from '../../components/shared/RegisterItem/RegisterItem';

const Tecnologias: React.FC = () => {
	return (
        <S.ConteinerIndex>
            <S.TitlePage>Tecnologias de trabalho</S.TitlePage>
            <S.ContainerContentStacks>
                <RegisterItem/>
                <RegisterItem/>
                <RegisterItem/>
                <RegisterItem/>
                <RegisterItem/>
            </S.ContainerContentStacks>
        </S.ConteinerIndex>
	);
};

export default Tecnologias;
