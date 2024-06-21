import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";
import { sizes } from "../../../assets/sizes/sizes";
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';


export const ContainerFooter = styled.div`
    width:${sizes.widthIndex};
    padding: 15px ${sizes.paddingIndex};
    max-height:483px;
    height: 483px;
    background-color:${colors.primary} ;
    display: flex;
    flex-wrap: wrap;
`;

export const ChildrenFooter = styled.div`
   flex-grow: 1;
   min-width: 500px;
   display: flex;
   gap: 15px;
   flex-direction: column;
`;
export const ChildrenFooter2 = styled.div`
   flex-grow: 1;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
`;
export const TextChildrenFooter2 = styled.p`
    font-size: 12px;
    font-weight: 400;
    color:${colors.white}
`;

export const ContainerTitle = styled.div`
    height: auto;
    width: 100%;
`;

export const TextTitle = styled.h2`
    font-size: 48px;
    font-weight: 500;
    color:${colors.white};
    line-height: 56px;
`;

export const ContainerSubTitle = styled.div`
    width: auto;
    height: auto;
`;
export const TextSubTitle = styled.p`
    margin: 0;
    font-size: 20px;
    letter-spacing: 0.15px;
    font-weight: 500;`;

export const LinkFooter = styled.a`
    text-decoration: none;
    color:${colors.white};
    cursor: pointer;
`;

export const ContainerSocial = styled.div`
    width: auto;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:20px
`;

export const IconWhatsapp = styled(FaWhatsapp)`
    font-size: 20px;
    color: ${colors.white};
`;

export const IconInstagram = styled(FaInstagram)`
    font-size: 20px;
    color: ${colors.white};
`;

export const IconLinkedin = styled(FaLinkedin)`
    font-size: 20px;
    color: ${colors.white};
`;