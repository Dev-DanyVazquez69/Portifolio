import React from "react";
import * as S from './style'
import { aviso } from "../../../assets/img/aviso";

const Aviso: React.FC = () => {
    return (
        <S.ContainerAviso>
            <S.ImagemAviso src={aviso} />
            <S.TextAviso>Site em construção!</S.TextAviso>
            <S.TextAviso>Estamos trabalhando para trazer um novo e incrível site em breve!</S.TextAviso>
        </S.ContainerAviso>
    )
}

export default Aviso;