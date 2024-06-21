import React from 'react';
import * as S from './style';

const ContainerTertiary: React.FC = () => {
    return (
        <S.ContainerTertiary>
            <S.ContainerColab>
                <S.Text1>Projetos</S.Text1>
                <S.Text2>Projetos pessoais <br /> e eventos</S.Text2>
            </S.ContainerColab>
            <S.ContainerClientes>
                <S.ContainerImage></S.ContainerImage>
                <S.ContainerText>
                    <S.TextCliente>xxxxxxxxxxxxxxxxxxxxx</S.TextCliente>
                    <S.TextDescribeCliente>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </S.TextDescribeCliente>
                </S.ContainerText>
            </S.ContainerClientes>
            <S.ContainerClientes>
                <S.ContainerImage></S.ContainerImage>
                <S.ContainerText>
                    <S.TextCliente>xxxxxxxxxxxxxxxxxxxxxxxxx</S.TextCliente>
                    <S.TextDescribeCliente>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </S.TextDescribeCliente>
                </S.ContainerText>
            </S.ContainerClientes>
            <S.ContainerColab>
                <S.Text1>Tecnologias</S.Text1>
                <S.Text2>Projetos em parceria <br /> e colaboração</S.Text2>
            </S.ContainerColab>
        </S.ContainerTertiary>
    );
};

export default ContainerTertiary;
