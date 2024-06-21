import React from "react";
import * as S from './style'
import { links } from "../../../utilities/urls";

const Footer: React.FC = () => {
    return (
        <S.ContainerFooter>
            <S.ChildrenFooter>
                <S.ContainerTitle>
                    <S.TextTitle>Vamos<br />Conversar!</S.TextTitle>
                </S.ContainerTitle>
                <S.ContainerSubTitle>
                    <S.TextSubTitle><S.LinkFooter href={links.Email}>contato: danyv7818@gmail.com.com.br</S.LinkFooter></S.TextSubTitle>
                </S.ContainerSubTitle>
                <S.ContainerSubTitle>
                    <S.TextSubTitle><S.LinkFooter href={links.Whatsapp} target="_blank">+55 (98) 98561-7643</S.LinkFooter></S.TextSubTitle>
                </S.ContainerSubTitle>
                <S.ContainerSocial>
                    <S.LinkFooter href={links.Whatsapp} target="_blank"><S.IconWhatsapp /></S.LinkFooter>
                    <S.LinkFooter href={links.Instagram} target="_blank"><S.IconInstagram /></S.LinkFooter>
                    <S.LinkFooter href={links.linkedin} target="_blank"><S.IconLinkedin /></S.LinkFooter>
                </S.ContainerSocial>
            </S.ChildrenFooter>
            <S.ChildrenFooter2>
                <S.TextChildrenFooter2>
                    © Daniel dos Santos 2024
                </S.TextChildrenFooter2>
            </S.ChildrenFooter2>
        </S.ContainerFooter>
    )
}

export default Footer;