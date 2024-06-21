import React from "react";
import * as S from './style'

const Slogan: React.FC = () => {
    return (
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
    )
};

export default Slogan;