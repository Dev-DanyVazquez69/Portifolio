import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";
import media from "../../../utilities/breakpoints/breakpoints";


export const ContainerItem = styled.section`
    height: auto;
    margin:50px;
    max-height: 144px;
    width: auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow: hidden;
    ${media.large`
    
    `}
    
    ${media.medium`
    
    `}
    
    ${media.small`
                
    `}
`;

export const ContainerText = styled.div`
    width: auto;
    height: auto;
    border-bottom: 3px solid ${colors.primary};
    cursor: pointer;

`;

export const TextItem = styled.h5`
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bolder;
    color: ${colors.black};

    ${media.small`
    font-size: 15px;
    `}

`;


export const TextDescribe = styled.p`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.15px;

    ${media.medium`
    font-size: 14px;
    `}

    ${media.small`
    font-size: 12px;
    `}
`;

export const ContainerImage = styled.div`
    width: 150px;
    height: 100%;
    max-height: 200px;
    margin: auto 0;
    ${media.large`
        width: 130px;
    `}
    
    ${media.medium`
        width: 120px;
    `}
    
    ${media.small`
        width: 110px;
    `}

`;

export const CertificateImage = styled.img`
    width: 100%;
    height: 100%;
`