import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";
import media from "../../../utilities/breakpoints/breakpoints";


export const ContainerItem = styled.section`
    height: 144px;
    margin:50px;
    max-height: 144px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15px;
    overflow: hidden;

    ${media.large`
    
    `}
    
    ${media.medium`
    
    `}
    
    ${media.small`
                
    `}
`;

export const ContainerText = styled.div`
    width: 50%;
    height: auto;
`;

export const TextItem = styled.h5`
    font-size: 18px;
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
    font-size: 10px;
    `}

    ${media.small`
    font-size: 8px;
    `}
`;

export const ContainerImage = styled.div`
    width: 97px;
    height: 100%;
    max-height: 200px;
    background-color: ${colors.primary};
    margin: auto 0;

`;